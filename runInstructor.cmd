@echo off
REM Použití:
REM   runInstructor.bat         → běží se všemi jazyky
REM   runInstructor.bat cs      → běží jen cs

set LANG=%1
if not "%LANG%"=="" (
  set BUILD_ONLY_LOCALE=%LANG%
)

call .venv\Scripts\activate

set DEV_MODE=true
python -m mkdocs serve -f mkdocs_instructor.yml -a localhost:8067
