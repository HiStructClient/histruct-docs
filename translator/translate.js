"use strict";

const { Translator } = require('deepl-node');
const fs = require('fs');
const path = require('path');
const openai = require('openai');
const crypto = require('crypto');
const metadataParser = require('markdown-yaml-metadata-parser');
const yaml = require('js-yaml');
const argv = require('minimist')(process.argv.slice(2));

// Složky s jazyky
const langFolders = ['cs', 'en', "de"];

const tranlationDirections = {
    "cs": "en",
    "en": "cs",
    "de": "en",
}

const inputDir = '../docs';
const outputDir = 'test/docs-translated';

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

function getAllFilesInLangFolder(lang, includeAutoTranslated = true) {
    const folder = path.join(inputDir, lang);
    const files = [];

    walkSync(folder, (filepath, stat) => {
        if (stat.isFile() && filepath.endsWith('.md')) {
            const content = fs.readFileSync(filepath, 'utf8');
            const meta = metadataParser(content).metadata ?? {};

            if (includeAutoTranslated || meta.autoTranslated !== true) {
                files.push(filepath.slice(folder.length + 1));
            }
        }
    });

    return files;
}

console.log(getAllFilesInLangFolder('cs', false));

// Najít soubory k překladu
function findMissingTransaltion() {

    const filesToTranslate = [];

    // Pro každou dvojici jazyků
    for (const lang1 of langFolders) {
        for (const lang2 of langFolders) {

            if (lang1 !== lang2) {

                // Rekurzivně projít složky a soubory
                const folder1 = path.join(inputDir, lang1);
                if (!fs.existsSync(folder1)) {
                    return;
                }

                walkSync(folder1, (filepath, stat) => {
                    if (stat.isFile() && filepath.endsWith('.md')) {

                        // Odstranit kořenovou cestu
                        const filename = filepath.replace(folder1, '');

                        // Pokud soubor chybí ve druhé složce
                        const folder2 = path.join(inputDir, lang2);
                        if (!fs.existsSync(path.join(folder2, filename))) {

                            // Přidat do výsledku  
                            filesToTranslate.push({
                                srcLang: lang1,
                                targetLang: lang2,
                                file: filename
                            });

                        }

                    }
                });

            }

        }

    }

    return filesToTranslate;
}


function findOutdatedTranslations() {
    for (const lang1 of langFolders) {

        const folder1 = path.join(outputDir, lang1);

        walkSync(folder1, (filepath, stat) => {
            if (stat.isFile() && filepath.endsWith('.md')) {

                const fileContent = fs.readFileSync(filepath, 'utf8')?.trim().replace(/\r?\n/g, "\n");
                const metadataParsed = metadataParser(fileContent).metadata ?? {};

                if (metadataParsed.sourceHash && metadataParsed.sourceLang) {
                    const sourceFile = filepath.replace(folder1, path.join(inputDir, metadataParsed.sourceLang));
                    const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');
                    const sourceFileHash = getFileContentHash(sourceFileContent);

                    if (sourceFileHash !== metadataParsed.sourceHash) {
                        console.log(`Soubor ${filepath} je zastaralý!`);
                    } else {
                     //   console.log(`Soubor ${filepath} je aktuální.`);
                    }
                } else {
                    console.log(`Soubor ${filepath} nemá metadata!`);
                }
            } else {
                console.log(`Soubor ${filepath} není soubor!`);
            }
        });
    }
}

findOutdatedTranslations();

function getFilesToTranslation() {
    langFolders.forEach(lang2 => {
    
        
    
    });
}



function createOutputFolders() {

    // Projít jazyky
    langFolders.forEach(lang => {

        // Sestavit cestu ke složce pro daný jazyk
        const outputPath = path.join(outputDir, lang);

        // Zkontrolovat existenci, pokud složka neexistuje, vytvořit
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath);
        }

    });

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

async function translateFiles(files, serviceName = 'deepl') {

    // Pro každý soubor
    for (const file of files) {

        const { srcLang, targetLang, file: filename } = file;

        // Načíst vstupní soubor
        const inputPath = path.join(inputDir, srcLang, filename);
        const text = fs.readFileSync(inputPath, 'utf8');
        
        // Přeložit soubor
        try {
            if (serviceName === 'deepl') {
                var translated = await translaleDeepl(text, srcLang, targetLang);
            } else if (serviceName === 'chatgpt') {
                var translated = await translateChatGpt(text, srcLang, targetLang);
            } else {
                throw new Error(`Neznámá služba pro překlad: ${serviceName}`);
            }
        } catch (error) {
            console.error(`Překlad souboru ${filename} z ${srcLang} do ${targetLang} selhal!`, error);
        }

        // Uložit informace o překladu do metadat
        const srcFileHash = getFileContentHash(text);
        let translatedFileContent = saveInfoToMetadata(translated.text, srcLang, srcFileHash);

        // Uložit přeložený soubor
        const outputPath = path.join(outputDir, targetLang, filename);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, translatedFileContent, { encoding: 'utf8' });
    }

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

    return `---\n${metadataYaml}---\n\n${content}`;;
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


// console.log(getDictionaryString('cs', 'en'));

async function run() {

    console.log('Překlad souborů...');

    const files = getFilesToTranslation();

    console.log(`Překládám ${files.length} souborů...`);

    createOutputFolders();

    const serviceName = argv.service ?? 'deepl';

    await translateFiles(files);

    console.log('Hotovo!');
}

//run();


const testText = `
---
title: "Návod na použití"
---

# Opláštění

Pro konfiguraci vnější fasády, barevného provedení, orientaci prvků apod. lze na kartě Opláštění zvolit různé typy izolačních panelů, jejich orientaci a barevné provedení. 

## Nastavení geometrie stěn
Tato nabídka umožní zvolit zejména stěny se soklem a nebo bez a případně výšku soklu.


`;


// translateChatGpt(testText, 'cs', 'en').then(r => {
//     console.log(r);

//     r = saveInfoToMetadata(r, "cs", getFileContentHash(testText));

//     console.log("\n\n-------------------------------------------\n\n");

//     console.log(r);
// });


