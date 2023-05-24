#MULTI-STAGE BUILDS

#Stage 1
FROM node:19.2-alpine3.16 as deps 

# cd app
WORKDIR  /app

# Dest /app
COPY package.json ./

# Instalar las dependencias
RUN npm install

#Stage-2
FROM node_modules:19.2-alpine3.16 as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . . 

RUN npm run test





# Dest /app
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencias de prod
RUN npm install --prod


# Comando run de la imagen
CMD [ "node", "app.js" ]