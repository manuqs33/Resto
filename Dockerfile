# Imagen base para construir el contenedor
FROM node:14-alpine

# Instalar Python y pip
RUN apk add --no-cache python3 python3-dev py3-pip build-base

# Instalar dependencias
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Construir el front-end
RUN npm run build

# Cambiar al directorio de trabajo para el back-end
WORKDIR /django_api

# Instalar dependencias
COPY django_api/requirements_windows.txt .
RUN pip install --no-cache-dir -r requirements_windows.txt

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Configurar variables de entorno
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=myproject.settings.production

# Migrar la base de datos
RUN python manage.py migrate

# Correr la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]