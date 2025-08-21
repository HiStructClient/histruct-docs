import minimist from 'minimist';
import * as t from './translate.js';

const argv = minimist(process.argv.slice(2));

const argCommand = argv._[0] ?? "help";
const argLang = argv._[1] ?? "en";
const argFile = argv._[2] ?? null;
const argPattern = argv._[3] ?? null; // New pattern argument

const prefix = argv.folder ?? "";

const service = argv.service ?? "chatgpt";

const sourceLang = t.getDefaultSourceLang(argLang);

// Simple pattern matching function
function matchesPattern(filePath, pattern) {
    if (!pattern) return true;
    
    // Normalize both paths to use forward slashes for consistent matching
    const normalizedFilePath = filePath.replace(/\\/g, '/');
    const normalizedPattern = pattern.replace(/\\/g, '/');
    
    // Escape special regex characters except * and ?
    const regexPattern = normalizedPattern
        .replace(/[.+^${}()|[\]\\]/g, '\\$&') // Escape special regex chars (removed ~ from list)
        .replace(/\*/g, '.*')   // Convert * to .*
        .replace(/\?/g, '.');   // Convert ? to .
    
    const regex = new RegExp('^' + regexPattern, 'i');
    return regex.test(normalizedFilePath);
}

if (argCommand === "help") {
    console.log("Usage: node run.js <command> [options]");
    console.log("Commands:");
    console.log("  help");
    console.log("  translate <lang> [file|pattern]");
    console.log("  udpateHashes <lang> [file]");
    console.log("  allFiles <lang> [pattern]");
    console.log("  obsolete <lang>");
    console.log("  missing <lang>");
    console.log("  forTranslation <lang>");
    process.exit(0);
} else if (argCommand === "translate") {
    if (argFile) {
        // Check if argFile is a pattern (contains * or ?) or a specific file
        if (argFile.includes('*') || argFile.includes('?')) {
            // Treat as pattern
            const allFiles = t.findAllFilesToTranslate(argLang, sourceLang, prefix);
            const filteredFiles = allFiles.filter(file => matchesPattern(file.fileName, argFile));
            
            console.log(`Translating ${filteredFiles.length} files matching pattern '${argFile}' from '${sourceLang}' to '${argLang}'...`);
            t.run(filteredFiles, service).then(() => {
                console.log("Done.");
            });
        } else {
            // Treat as specific file
            const file = {
                fileName: argFile,
                targetLang: argLang,
                srcLang: sourceLang,
            }

            console.log(`Translating '${argFile}' from '${sourceLang}' to '${argLang}'...`);
            t.translateFile(file, service).then(() => {
                console.log("Done.");
            });
        }
    } else {
        const files = t.findAllFilesToTranslate(argLang, sourceLang, prefix);

        console.log(`Translating ${files.length} files in '${argLang}' lang folder...`);
        t.run(files, service).then(() => {
            console.log("Done.");
        });
    }
} else if (argCommand === "allFiles") {
    const allFiles = t.getAllFilesInLangFolder(argLang, prefix);
    const filteredFiles = argPattern ? allFiles.filter(file => matchesPattern(file, argPattern)) : allFiles;
    
    console.log(`All files in '${argLang}' lang folder${argPattern ? ` matching pattern '${argPattern}'` : ''}:`);
    console.log(filteredFiles);
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
