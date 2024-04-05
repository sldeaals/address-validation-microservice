FROM node:14

WORKDIR /usr/src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.ts"]
