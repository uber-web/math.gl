FROM node:8.9.0

WORKDIR /math-gl

COPY package.json yarn.lock /math-gl/

RUN yarn
