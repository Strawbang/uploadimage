FROM node:16

WORKDIR /usr/api

COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 8080
CMD [ "node", "src/server.js" ]