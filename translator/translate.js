import { Translator } from 'deepl-node';
import gTranslate from '@google-cloud/translate';
import fs from 'fs';
import path from 'path';
import openai from 'openai';
import crypto from 'crypto';
import metadataParser from 'markdown-yaml-metadata-parser';
import yaml from 'js-yaml';

// Složky s jazyky
const langFolders = ['cs', 'en', "de", "ro"];

const tranlationDirections = {
    "cs": "en",
    "en": "cs",
    "de": "cs",
    "ro": "cs",
}

export function getDefaultSourceLang(targetLang) {
    return tranlationDirections[targetLang];
}

const inputDir = '../docs';
const outputDir = '../docs';

// const inputDir = 'test/docs-merged';
// const outputDir = 'test/docs-merged';

const DEEPL_AUTH_KEY = "";
const GOOGLE_API_KEY = "";
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
 * @param {string} prefix
 * @param {boolean} includeOnlyAutoTranslated
 * @returns {Array<string>}
 */
export function getAllFilesInLangFolder(lang, prefix, includeOnlyAutoTranslated = true) {
    const folder = path.join(inputDir, lang);
    const folder2 = prefix ? path.join(inputDir, lang, prefix) : folder;
    const files = [];

    walkSync(folder2, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.md')) {
            const content = fs.readFileSync(filepath, 'utf8');
            const meta = metadataParser(content).metadata ?? { autoTranslated: false };

            if (!includeOnlyAutoTranslated || meta.autoTranslated !== true) {
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
 * @param {string} sourceLang
 * @param {string} prefix
 * @returns {Array<TranslationFile>}
 */
export function findOutdatedTranslations(lang, sourceLang, prefix, skipAutoTranslated = true) {
    if (lang == "all") {
        return langFolders.map(l => findOutdatedTranslations(l)).flat();
    }

    const filesToTranslate = [];

    const folder1 = path.join(outputDir, lang);
    const folder2 = prefix ? path.join(outputDir, lang, prefix) : folder1;

    if (!fs.existsSync(folder1)) {
        console.log(`Jazyk '${lang}' nemá složku!`);
        return [];
    }

    if (!fs.existsSync(folder2)) {
        console.log(`Jazyk '${lang}' nemá složku '${prefix}'!`);
        return [];
    }

    walkSync(folder2, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.md')) {

            const fileContent = fs.readFileSync(filepath, 'utf8')?.trim().replace(/\r?\n/g, "\n");
            const metadataParsed = metadataParser(fileContent).metadata ?? {};

            if (metadataParsed.sourceHash && metadataParsed.sourceLang) {
                // Oprava: správné mapování relativní cesty
                const relativePath = filepath.replace(folder1 + path.sep, '');
                const sourceFile = path.join(inputDir, sourceLang, relativePath);
                
                // Kontrola existence source souboru
                if (!fs.existsSync(sourceFile)) {
                    console.warn(`Source soubor neexistuje: ${sourceFile}`);
                    return;
                }
                
                const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');
                const sourceFileHash = getFileContentHash(sourceFileContent);

                if (sourceFileHash !== metadataParsed.sourceHash) {
                    // console.log(`Soubor ${filepath} je zastaralý!`);
                    filesToTranslate.push({
                        srcLang: sourceLang,
                        targetLang: lang,
                        file: relativePath,
                        fileName: relativePath,
                        reason: "outdated",
                    });
                } else {
                    //   console.log(`Soubor ${filepath} je aktuální.`);
                }
            } else {
                // Soubor nemá metadata - považovat za zastaralý a přeložit
                const relativePath = filepath.replace(folder1 + path.sep, '');
                const sourceFile = path.join(inputDir, sourceLang, relativePath);
                
                if (fs.existsSync(sourceFile)) {
                    // console.log(`Soubor ${filepath} nemá metadata - bude přeložen!`);
                    filesToTranslate.push({
                        srcLang: sourceLang,
                        targetLang: lang,
                        file: relativePath,
                        fileName: relativePath,
                        reason: "no_metadata",
                    });
                } else {
                    console.warn(`Soubor ${filepath} nemá metadata a source soubor neexistuje!`);
                }
            }
        } else {
            // console.log(`Soubor ${filepath} není soubor!`);
        }
    });

    return filesToTranslate;
}

/// Vrátí seznam souborů, které je potřeba přeložit, protože chybí
export function findMissingTranslations(lang, sourceLang, prefix, includeOnlyAutoTranslated) {
    if (lang == "all") {
        return langFolders.map(l => findMissingTranslations(l, sourceLang, prefix, includeOnlyAutoTranslated)).flat();
    }

    const filesToTranslate = [];

    const folder1 = path.join(outputDir, lang);
    const folder2 = prefix ? path.join(outputDir, lang, prefix) : folder1;

    if (!fs.existsSync(folder1)) {
        console.log(`Jazyk '${lang}' nemá složku!`);
        return [];
    }

    if (!fs.existsSync(folder2)) {
        console.log(`Jazyk '${lang}' nemá složku '${prefix}'!`);
        return [];
    }

    const allFiles = getAllFilesInLangFolder(sourceLang, prefix, includeOnlyAutoTranslated);

    // console.log(`V jazyku '${lang}' chybí ${allFiles.length} souborů.`, sourceLang)

    for (const file of allFiles) {
        if (!fs.existsSync(path.join(folder1, file))) {
            filesToTranslate.push({
                srcLang: sourceLang,
                targetLang: lang,
                file: file,
                fileName: file, // Oprava: odstranil zbytečný replace
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
export function findAllFilesToTranslate(lang, sourceLang, prefix) {
    if (lang == "all") {
        return langFolders.map(l => findAllFilesToTranslate(l, sourceLang, prefix)).flat();
    }

    const filesToTranslate = [];

    filesToTranslate.push(...findOutdatedTranslations(lang, sourceLang, prefix));
    filesToTranslate.push(...findMissingTranslations(lang, sourceLang, prefix));

    return filesToTranslate;
}


const mappingsLanguages = {
    'en': { targetDeepl: 'en-GB', name: "english", },
    'cs': { targetDeepl: 'cs', name: "czech", },
    'de': { targetDeepl: 'de', name: "german", },
    'ro': { targetDeepl: 'ro', name: "romanian", },

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

    return translated.text;
}

/** @type {Translate} */
let googleTranslator = undefined;

async function translateGoogle(text, srcLang, targetLang) {
    // Inicializace překladače
    if (!googleTranslator) {
        googleTranslator = new gTranslate.v2.Translate({ key: GOOGLE_API_KEY });
    }

    // Překlad pomocí Google Translate
    const [translated] = await googleTranslator.translate(text, { from: srcLang, to: targetLang });

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

async function translateText(text, serviceName, srcLang, targetLang) {
    if (serviceName === 'deepl') {
        return translaleDeepl(text, srcLang, targetLang);
    } else if (serviceName === 'google') {
        return translateGoogle(text, srcLang, targetLang);
    } else if (serviceName === 'chatgpt') {
        return translateChatGpt(text, srcLang, targetLang);
    } else {
        throw new Error(`Neznámá služba pro překlad: ${serviceName}`);
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

    let translated = "";

    // Přeložit soubor
    try {
        if (text) {
            translated = await translateText(text, serviceName, srcLang, targetLang);
        }
    } catch (error) {
        throw new AggregateError(`Překlad souboru ${fileName} z ${srcLang} do ${targetLang} selhal!`, error);
    }

    // Uložit informace o překladu do metadat
    const srcFileHash = getFileContentHash(text);
    let translatedFileContent = saveInfoToMetadata(translated, srcLang, srcFileHash);

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

    const metadata = metadataParsed.metadata ?? {};
    metadata.sourceLang = sourceLang;
    metadata.sourceHash = sourceHash;
    metadata.autoTranslated = true;
    const metadataYaml = yaml.dump(metadata);

    const content = metadataParsed.content ?? "";

    return `---\n${metadataYaml}---\n\n${content}`;
}


let dictionary = {
    cs: [ "opláštění", "hala", "sokl" ],
    en: [ "sheeting", "building", "basewall" ],
    de: [ "verkleidung", "halle", "sockel" ],
    ro: [ "placare", "hală", "soclu" ],
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

    return result ? undefined : undefined;
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


