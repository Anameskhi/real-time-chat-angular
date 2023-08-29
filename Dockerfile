FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@15.0.0 

COPY . .

RUN npm run build
EXPOSE 4200