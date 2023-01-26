FROM node:16.15
WORKDIR /usr/src/gerenciador_dieta
COPY ./package*.json ./
COPY ./.husky ./
RUN npm install
COPY . .