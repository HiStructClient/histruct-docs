
docker build -t fcs-docs .

docker run -p 8000:8000 -v .:/docs fcs-docs
