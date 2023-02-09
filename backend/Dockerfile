FROM node:17-alpine As server-build

WORKDIR /app

COPY package*.json ./
RUN npm install  

COPY server.js ./
COPY stlfolders ./stlfolders

EXPOSE 5000 

CMD ["node", "server.js"]

