# Pull base image
FROM smebberson/alpine-nginx-nodejs:latest

# Install all updates and dependencies
RUN apk update
RUN apk upgrade
RUN apk add bash
RUN apk add vim

# Install IP tools if needed
# RUN apk iputils-ping

# development: build as if web development will take place on Docker
# production: build as if production, so only public files will be deployed pre-built ready to run
# refer: line 17, if dev copy all, if prod copy public
ENV NODE_ENV=production NODE_PORT=4000

# Stream the nginx logs to stdout and stderr
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Build the npm modules
ADD package.json home/lesson-two/package.json
RUN cd home/lesson-two && npm install --production

# TODO:  need to test this new addition from http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/ 
RUN mkdir -p /opt/app && cp -a node_modules /opt/app/

# Add the files (works with .dockerignore to exclude /app/node_modules, so the above npm build isn't replaced)
# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app
# ADD . home/lesson-two

EXPOSE 4000

# Start the server
# CMD ["node", "server.js"]