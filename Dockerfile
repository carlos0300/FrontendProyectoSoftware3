# Usa como base a nginx
FROM nginx:1.21.4-alpine
# Copia un archivo de configiración de nginx
COPY nginx.conf /etc/nginx/nginx.conf
# Copia el directorio dist en el directorio que usa nginx para publicar un web
COPY /build /usr/share/nginx/html