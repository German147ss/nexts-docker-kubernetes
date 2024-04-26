# Establecer la imagen base
FROM node:latest

# Crear directorio de trabajo
WORKDIR /usr/app

# Instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación de Next.js
RUN npm run build

# Exponer el puerto (3000 es el predeterminado para Next.js)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
