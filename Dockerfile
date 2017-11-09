FROM node:8.9.0

WORKDIR /mathgl

COPY package.json yarn.lock /mathgl/

RUN yarn
