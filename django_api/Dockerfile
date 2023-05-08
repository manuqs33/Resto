# Partimos de la imagen oficial de Python 3.9
FROM python:3.10.0

# Configuramos el directorio de trabajo
WORKDIR django_api/django_api

# Copiamos los requerimientos del proyecto y los instalamos
COPY requirements_windows.txt ./
RUN pip install --no-cache-dir -r requirements_windows.txt

# Copiamos el resto de los archivos del proyecto
COPY . .

# Exponemos el puerto 8000 para que sea accesible desde fuera del contenedor
EXPOSE 8000

# Comando por defecto para ejecutar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]