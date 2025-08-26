
call prepare.cmd

set DEV_MODE=false
python -m mkdocs build -f mkdocs_plain.yml -d site_instructor
