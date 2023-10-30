FROM python:3.9-alpine

RUN apk update && apk upgrade
RUN apk add --no-cache \
    build-base cairo-dev cairo cairo-tools \
    # pillow dependencies
    jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev

#RUN apk add libcairo2-dev libfreetype6-dev libffi-dev libjpeg-dev libpng-dev libz-dev
RUN pip install mkdocs mkdocs-material[imaging] mkdocs-static-i18n


WORKDIR /docs

EXPOSE 8000

CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
