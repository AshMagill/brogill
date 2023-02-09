FROM node:16.17.0-bullseye-slim AS ui-build 

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . ./

CMD ["npm","run","start"]



