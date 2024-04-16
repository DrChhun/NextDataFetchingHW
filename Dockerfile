# tell docker what node version we use in this project
FROM node:20-alpine

WORKDIR /app

# copy all package file into /app 
COPY package.json .

# tell docker to install all dependencie
RUN yarn 

# RUN yarn cache clean
# RUN yarn install --production --force

# copy all folder and file into our working directorie call /app (it's a docker)
COPY . .

RUN yarn build

# tell docker which port to run our proejct
EXPOSE 3000

# tell docker to run our project 
CMD [ "yarn", "start" ]