# Partimos de la imagen oficial de Node.js
FROM node:14-alpine

# Configuramos el directorio de trabajo
WORKDIR frontend/

# Copiamos los requerimientos del proyecto y los instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto de los archivos del proyecto
COPY . .

# Exponemos el puerto 3000 para que sea accesible desde fuera del contenedor
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "build/index.js"]