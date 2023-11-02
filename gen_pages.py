import mkdocs_gen_files

with mkdocs_gen_files.open("cs/hbc/index.md", "w") as f:
    print("#Hello, world! \n test", file=f)