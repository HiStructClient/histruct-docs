import { Translator } from 'deepl-node';
import fs from 'fs';
import path from 'path';
import openai from 'openai';
import crypto from 'crypto';
import metadataParser from 'markdown-yaml-metadata-parser';
import yaml from 'js-yaml';

// Složky s jazyky
const langFolders = ['cs', 'en', "de"];

const tranlationDirections = {
    "cs": "en",
    "en": "cs",
    "de": "en",
}

export function getDefaultSourceLang(targetLang) {
    return tranlationDirections[targetLang];
}

const inputDir = '../docs';
const outputDir = '../docs';

// const inputDir = 'test/docs-merged';
// const outputDir = 'test/docs-merged';

const DEEPL_AUTH_KEY = "0b09c89f-ba2e-c36b-4060-9a0d2a7417b7:fx";
const OPENAI_API_KEY = "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";

// Rekurzivní procházení složek
function walkSync(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkSync(filepath, callback);
        } else {
            callback(filepath, stat);
        }
    });
}

/**
 * @typedef {{
 *      srcLang: string;
 *      targetLang: string;
 *      file: string;
 *      fileName: string;
 *      reason: string;
 * }} TranslationFile
 */

/**
 * Vrátí seznam souborů v daném jazyce
 * @param {string} lang
 * @param {boolean} includeAutoTranslated
 * @returns {Array<string>}
 */
export function getAllFilesInLangFolder(lang, includeAutoTranslated = true) {
    const folder = path.join(inputDir, lang);
    const files = [];

    walkSync(folder, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.md')) {
            const content = fs.readFileSync(filepath, 'utf8');
            const meta = metadataParser(content).metadata ?? { autoTranslated: false };

            if (includeAutoTranslated || meta.autoTranslated !== true) {
                files.push(filepath.slice(folder.length + 1));
            }
        }
    });

    return files;
}

export function getAllImagesInLangFolder(lang) {
    const folder = path.join(inputDir, lang);
    const files = [];

    walkSync(folder, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.png')) {
            files.push(filepath.slice(folder.length + 1));
        }
    });

    return files;
}


/**
 * Vrátí seznam souborů, které je potřeba přeložit, protože jsou zastaralé
 * @param {string} lang
 * @returns {Array<TranslationFile>}
 */
export function findOutdatedTranslations(lang) {
    if (lang == "all") {
        return langFolders.map(l => findOutdatedTranslations(l)).flat();
    }

    const filesToTranslate = [];

    const folder1 = path.join(outputDir, lang);

    if (!fs.existsSync(folder1)) {
        console.log(`Jazyk '${lang}' nemá složku!`);
        return [];
    }

    walkSync(folder1, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.md')) {

            const fileContent = fs.readFileSync(filepath, 'utf8')?.trim().replace(/\r?\n/g, "\n");
            const metadataParsed = metadataParser(fileContent).metadata ?? {};

            if (metadataParsed.sourceHash && metadataParsed.sourceLang) {
                const sourceFile = filepath.replace(folder1, path.join(inputDir, metadataParsed.sourceLang));
                const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');
                const sourceFileHash = getFileContentHash(sourceFileContent);

                if (sourceFileHash !== metadataParsed.sourceHash) {
                    // console.log(`Soubor ${filepath} je zastaralý!`);
                    filesToTranslate.push({
                        srcLang: metadataParsed.sourceLang,
                        targetLang: lang,
                        file: filepath,
                        fileName: filepath.replace(folder1 + path.sep, ''),
                        reason: "outdated",
                    });
                } else {
                    //   console.log(`Soubor ${filepath} je aktuální.`);
                }
            } else {
                //console.log(`Soubor ${filepath} nemá metadata!`);
            }
        } else {
            //console.log(`Soubor ${filepath} není soubor!`);
        }
    });

    return filesToTranslate;
}

/// Vrátí seznam souborů, které je potřeba přeložit, protože chybí
export function findMissingTranslations(lang) {
    if (lang == "all") {
        return langFolders.map(l => findMissingTranslations(l)).flat();
    }

    const filesToTranslate = [];

    const primaryLang = tranlationDirections[lang];
    const folder1 = path.join(outputDir, lang);

    if (!fs.existsSync(folder1)) {
        console.log(`Jazyk '${lang}' nemá složku!`);
        return [];
    }

    const allFiles = getAllFilesInLangFolder(primaryLang, false);

    for (const file of allFiles) {
        if (!fs.existsSync(path.join(folder1, file))) {
            filesToTranslate.push({
                srcLang: primaryLang,
                targetLang: lang,
                file: file,
                fileName: file.replace(folder1 + path.sep, ''),
                reason: "missing",
            });
        }
    }

    return filesToTranslate;
}

/**
 * Vrátí seznam souborů, které je potřeba přeložit
 * @param {string} lang Jazyk, pro který se mají najít soubory
 * @returns {Array<TranslationFile>}
 */
export function findAllFilesToTranslate(lang) {
    if (lang == "all") {
        return langFolders.map(l => findAllFilesToTranslate(l)).flat();
    }

    const filesToTranslate = [];

    filesToTranslate.push(...findOutdatedTranslations(lang));
    filesToTranslate.push(...findMissingTranslations(lang));

    return filesToTranslate;
}


const mappingsLanguages = {
    'en': { targetDeepl: 'en-GB', name: "english", },
    'cs': { targetDeepl: 'cs', name: "czech", },
    'de': { targetDeepl: 'de', name: "german", },

    // další mapování
};

function mapLanguage(code) {

    return mappingsLanguages[code];

}

/** @type {Translator} */
let translatorDeepl = undefined;

async function translaleDeepl(text, srcLang, targetLang) {
        // Inicializace překladače
        if (!translatorDeepl) {
            translatorDeepl = new Translator(DEEPL_AUTH_KEY);
        }

        const targetLangDeepl = mapLanguage(targetLang).targetDeepl;

        // Překlad pomocí Deepl
        const translated = await translatorDeepl.translateText(text, srcLang, targetLangDeepl);

        return translated;
}

/** @type {openai.OpenAI} */
let openaiClient = undefined;

var disctionaryCache = new Map();

// Funkce pro překlad textu pomocí ChatGPT API
async function translateChatGpt(text, srcLangKey, targetLangKey) {
    const srcLang = mapLanguage(srcLangKey).name;
    const targetLang = mapLanguage(targetLangKey).name;

    // Inicializace klienta
    if (!openaiClient) {
      openaiClient = new openai.OpenAI({ apiKey: OPENAI_API_KEY });
    }

    const dictionaryKey = srcLangKey + "_" + targetLangKey;
    let dictionaryString = disctionaryCache.get(dictionaryKey);
    if (!dictionaryString) {
        dictionaryString = getDictionaryString(srcLangKey, targetLangKey);
        if (dictionaryString) {
            dictionaryString = "Use this vocabulary: " + dictionaryString + ".";
        } else {
            dictionaryString = "  ";
        }
        disctionaryCache.set(dictionaryKey, dictionaryString);
    }

    try {
      const response = await openaiClient.chat.completions.create({
        model: 'gpt-3.5-turbo', // Model pro textové úkoly
        messages: [ {
            role: "system",
            content: `Translate the following Markdown text from ${srcLang} to ${targetLang}. ${dictionaryString} Text:\n\n${text}`,
        } ],
        max_tokens: 1500, // Maximální délka překladu
      });

      const translatedText = response.choices[0].message.content?.trim().replace(/\r?\n/g, "\n");
      return translatedText;
    } catch (error) {
      console.error('Chyba při překladu:', error);
      return null;
    }
  }

/**
 * Přeloží soubor
 * @param {TranslationFile} fileData
 * @param {string} serviceName
 * @returns {Promise<boolean>}
 * @throws {Error}
 * @async
 */
export async function translateFile(fileData, serviceName = 'deepl') {
    const { srcLang, targetLang, fileName } = fileData;

    // Načíst vstupní soubor
    const inputPath = path.join(inputDir, srcLang, fileName);
    const outputPath = path.join(outputDir, targetLang, fileName);
    const text = fs.readFileSync(inputPath, 'utf8');

    if (!text) {
        return false;
    }

    // Přeložit soubor
    try {
        if (serviceName === 'deepl') {
            var translated = await translaleDeepl(text, srcLang, targetLang);
        } else if (serviceName === 'chatgpt') {
            translated = await translateChatGpt(text, srcLang, targetLang);
        } else {
            throw new Error(`Neznámá služba pro překlad: ${serviceName}`);
        }
    } catch (error) {
        console.error(`Překlad souboru ${fileName} z ${srcLang} do ${targetLang} selhal!`, error);
    }

    // Uložit informace o překladu do metadat
    const srcFileHash = getFileContentHash(text);
    let translatedFileContent = saveInfoToMetadata(translated.text, srcLang, srcFileHash);

    // Uložit přeložený soubor
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, translatedFileContent, { encoding: 'utf8' });

    return true;
}

function getFileContentHash(fileContent) {
    const hash = crypto.createHash('md5');
    hash.update(fileContent);
    return hash.digest('hex');
}

/**
 *  Přidá informace o překladu do metadat souboru
 * @param {string} text
 * @param {string} sourceLang
 * @param {string} sourceHash
 */
function saveInfoToMetadata(text, sourceLang, sourceHash) {
    let metadataParsed = metadataParser(text);

    const metadata = metadataParsed.metadata;
    metadata.sourceLang = sourceLang;
    metadata.sourceHash = sourceHash;
    metadata.autoTranslated = true;
    const metadataYaml = yaml.dump(metadata);

    const content = metadataParsed.content ?? "  ";

    return `---\n${metadataYaml}---\n\n${content}`;
}


let dictionary = {
    cs: [ "opláštění", "hala", "sokl" ],
    en: [ "sheeting", "building", "basewall" ],
    de: [ "verkleidung", "halle", "sockel" ],
}

function getDictionary(sourceLang, targetLang) {
    const source = dictionary[sourceLang];
    const target = dictionary[targetLang];

    const result = source.map((word, index) => {
        return {
            source: word,
            target: target[index],
        }
    });

    return result;
}

function getDictionaryString(sourceLang, targetLang) {
    const dictionary = getDictionary(sourceLang, targetLang);

    const result = dictionary.map(item => {
        return `${item.source} -> ${item.target}`;
    }).join('; ');

    return result;
}


/**
 * Přeloží všechny zadané soubory
 * @param {Array<TranslationFile>} files
 * @param {string} serviceName
 * @returns {Promise<void>}
 * @async
 */
export async function run(files, serviceName) {
    for (const file of files) {
        if (await translateFile(file, serviceName)) {
            console.log(`Přeloženo ${file.srcLang}->${file.targetLang}: ${file.file}`);
        } else {
            console.log(`Prázdný soubor ${file.srcLang}->${file.targetLang}: ${file.file}`);
        }
    }
}

//run();


// const testText = `
// ---
// title: "Návod na použití"
// ---

// # Opláštění

// Pro konfiguraci vnější fasády, barevného provedení, orientaci prvků apod. lze na kartě Opláštění zvolit různé typy izolačních panelů, jejich orientaci a barevné provedení.

// ## Nastavení geometrie stěn
// Tato nabídka umožní zvolit zejména stěny se soklem a nebo bez a případně výšku soklu.


// `;


// translateChatGpt(testText, 'cs', 'en').then(r => {
//     console.log(r);

//     r = saveInfoToMetadata(r, "cs", getFileContentHash(testText));

//     console.log("\n\n-------------------------------------------\n\n");

//     console.log(r);
// });


