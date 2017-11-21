FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]
