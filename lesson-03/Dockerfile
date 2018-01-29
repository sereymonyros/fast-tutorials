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

# Install IP tools if needed
# RUN apk iputils-ping

# development: build as if web development will take place on Docker
# production: build as if production, so only public files will be deployed pre-built ready to run
# refer: line 17, if dev copy all, if prod copy public
# ENV NODE_ENV=production NODE_PORT=4000

EXPOSE 3000
# Until Fluent Web / FAST is open source do not NPM install locally on the container to limit the
# requirement for having to use Azure Key Vault in order to connect to VSTS Private Package for 
# FW Components / Styles. Once this is ready, all prototypes can run off the same docker container
# pulling latest code from Git and NPM installing on the local server itself. This will add time 
# during startup/reboot, but, if we cache wisely we can eliminate this performance cost.

# Build the npm modules
#ADD package.json home/lesson-03/package.json
#RUN cd home/lesson-03 && npm install --production

# First run webpack for production on local environment to create the public folders

# This may require changing to /home/site/wwwroot/ on Azure distributions
# ADD build/public/ /var/www/html
# Already happening in docker-compose file
# Additionally, if we want a default spash page before installing application update
# the `root/usr/` to `root/var/www/html` or update the configuration in `etc/nginx/conf.d/default.conf` 
# to repoint NGINX to proper folder to run website.