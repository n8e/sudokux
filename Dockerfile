# Node versions appended using ':'
FROM node:8

# Root directory inside container. This is where you can ssh into a 
# running container using `docker exec -it <container_name> /bin/bash`
WORKDIR /usr/src/app

COPY package*.json ./

# copy all contents of root folder into container working directory
COPY . .

RUN npm i

# make port available outside container
EXPOSE 3000

CMD [ "npm", "start" ]
