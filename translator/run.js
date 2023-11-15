
import minimist from 'minimist';
import * as t from './translate.js';

const argv = minimist(process.argv.slice(2));

const argCommand = argv._[0] ?? "help";
const argLang = argv._[1] ?? "en";
const argFile = argv._[2] ?? null;

const prefix = argv.folder ?? "";

const service = argv.service ?? "deepl";

const sourceLang = t.getDefaultSourceLang(argLang);

if (argCommand === "help") {
    console.log("Usage: node run.js <command> [options]");
    console.log("Commands:");
    console.log("  help");
    console.log("  translate <lang> [file]");
    console.log("  udpateHashes <lang> [file]");
    console.log("  allFiles <lang>");
    console.log("  obsolete <lang>");
    console.log("  missing <lang>");
    console.log("  forTranslation <lang>");
    process.exit(0);
} else if (argCommand === "translate") {
    if (argFile) {
        const file = {
            file: argFile,
            targetLang: argLang,
            srcLang: sourceLang,
        }

        console.log(`Translating '${argFile}' from '${sourceLang}' to '${argLang}'...`);
        t.translateFile(file, service).then(() => {
            console.log("Done.");
        });

    } else {

        const files = t.findAllFilesToTranslate(argLang, sourceLang, prefix);

        console.log(`Translating ${files.length} files in '${argLang}' lang folder...`);
        t.run(files, service).then(() => {
            console.log("Done.");
        });
    }
} else if (argCommand === "allFiles") {
    console.log(`All files in '${argLang}' lang folder:`);
    console.log(t.getAllFilesInLangFolder(argLang, prefix));
} else if (argCommand === "allImages") {
    console.log(`All files in '${argLang}' lang folder:`);
    console.log(t.getAllImagesInLangFolder(argLang, prefix));
} else if (argCommand === "missing") {
    console.log(t.findMissingTranslations(argLang, sourceLang, prefix).map(t => t.targetLang + ": " + t.file + " (" + t.reason + ")").join("\n"));
} else if (argCommand === "obsolete") {
    console.log(t.findOutdatedTranslations(argLang, sourceLang, prefix).map(t => t.targetLang + ": " + t.file + " (" + t.reason + ")").join("\n"));
} else if (argCommand === "forTranslation") {
    console.log(t.findAllFilesToTranslate(argLang, sourceLang, prefix).map(t => t.targetLang + ": " + t.file + " (" + t.reason + ")").join("\n"));
} else {
    console.log("Unknown command: " + argCommand);
    process.exit(1);
}
