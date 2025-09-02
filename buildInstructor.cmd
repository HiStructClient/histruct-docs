
call prepare.cmd

set DEV_MODE=false
python -m mkdocs build -f mkdocs_instructor.yml -d build/site_instructor
