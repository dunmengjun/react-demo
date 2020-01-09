FROM nginx
COPY build/docker /usr/share/nginx/html
EXPOSE 80