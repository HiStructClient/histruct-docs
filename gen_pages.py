import mkdocs_gen_files
from pathlib import Path
from typing import IO

# with mkdocs_gen_files.open("cs/hbc/index.md", "w") as f:
#     print("#Hello, world! \n test", file=f)

def print_attrs(obj, indent=0):
    for key, value in vars(obj).items():
        print("    " * indent + str(key))
        if isinstance(value, object):
            print_attrs(value, indent+1)
        else:
            print("    " * (indent+1) + str(value))


def copy_file_to_lang(sourcePath, docsPath_target):
    targetPath = docsPath_target.joinpath(sourcePath.relative_to(docsPath_source))

    if (docsPath.joinpath(targetPath).exists()):
        return

    with mkdocs_gen_files.open(targetPath, "wb") as f:
        f: IO[bytes]
        with sourcePath.open("rb") as fsource:
            print(f"Copy {sourcePath} -> {targetPath}")
            f.write(fsource.read())


# najít všechny .png soubory v adresáři docs/cs/
# a přidat je do mkdocs_gen_files

currentLang = mkdocs_gen_files.config.theme['language']

if (currentLang == "en" or currentLang == "ro"):

    docsPath = Path("docs/")
    docsPath_source = docsPath.joinpath("cs/")
    docsPath_target = Path( currentLang + "/")

    for sourcePath in docsPath_source.rglob("**/*.png"):
        copy_file_to_lang(sourcePath, docsPath_target)

    # md soubory bohužel nenajde i18n
    # for sourcePath in docsPath_source.rglob("**/*.md"):
    #     copy_file_to_lang(sourcePath, docsPath_target)

