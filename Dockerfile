FROM node:14.15.0

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y openjdk-8-jre-headless \
    && npm update -y \
    && npm install -g firebase-tools \
    && npm install

EXPOSE 3000
EXPOSE 4000
EXPOSE 5000