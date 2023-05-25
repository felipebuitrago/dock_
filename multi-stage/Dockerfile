#MULTI-STAGE BUILDS

#Stage 1 - Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps 
WORKDIR  /app
COPY package.json ./
RUN npm install

#Stage 2 - Build y Tests
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . . 
RUN npm run test

#Stage 3 - Dependencias de Producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

#Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node", "app.js" ]