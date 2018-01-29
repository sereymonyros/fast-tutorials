# Pull base image
FROM smebberson/alpine-nginx-nodejs:latest

# It's good practice to Group run's to create less Dockerfile layers
# Install all updates and dependencies
# Lastly stream the nginx logs to stdout and stderr
RUN apk update && \
    apk upgrade && \
    apk add bash && \
    apk add vim && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 2000
