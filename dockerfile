#Imagen base de donde voy a arrancar
FROM node:alpine
#El run me permite ejecutar comandos
RUN npm install pm2 -g
#Copia desde mi carpeta en el contenedor
COPY ./ /app/

WORKDIR /app

RUN npm i

RUN npm run build

EXPOSE 3000