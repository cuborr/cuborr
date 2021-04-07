FROM python:3.8.3-alpine

ENV PYTHONUNBUFFERED=1

# install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    musl-dev
    
RUN pip install --upgrade pip

WORKDIR /usr/src/web

# install python requirements
COPY requirements.txt .
RUN pip3 install -r requirements.txt

ADD . /usr/src/web
