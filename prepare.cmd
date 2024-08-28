
if not exist .venv\Scripts\python.exe (
    echo "Python virtual environment not found. Creating..."
    python -m venv .venv
)

call .venv\Scripts\activate

echo "Installing dependencies..."

python -m pip install --upgrade pip

python -m pip install -r requirements.txt
