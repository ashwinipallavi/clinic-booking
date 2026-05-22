FROM nginx:alpine

LABEL maintainer="DevOps Project Student"
LABEL description="Dockerized Hospital Appointment Booking Website"

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
