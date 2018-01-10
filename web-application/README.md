
# Getting starting with Fluent Web

## Understanding project folder configuration
### 'app'
This folder is used as the primary working application directory where source code lives. This is the primary application being built.

### 'build'
This folder contains webpack configuration. When webpack builds for production scenarios this folder will populate a `/public` directory. The `public` directory will contain all build files.

### 'root'
This folder contains production server configuration files in structure compatible with the OS running the application.

## Installing application dependencies
Change directory inside /web-application and install pre-requisites node packages.
```
$ cd ./web-application
$ npm i
```

## Working without Docker, in local development environment
Leverage Webpack capability to build web application and run locally while making web application changes.

Change directory inside /web-application and install pre-requisites.
```
$ cd ./web-application
$ npm i
```

Build, and startup webpack server as production or development.
```
$ npm run serve-pro
```
[or] 
```
$ npm run serve-dev
```

## Working with Docker
Leverage Docker for running as a staging environment to pre-validate and testing web application is ready for Continous Delivery into production.

### Installing and validating pre-requisites
Validate and view your Compose file.
```
$ docker-compose config
```

### Building
Build and verify all work is being done correctly.
```
$ docker-compose build
```

### Starting and re-building
Start up the server in interactive mode.
```
$ docker-compose up
```

Start up the server in background as `-d`, detached mode.
```
$ docker-compose up -d
```

*Launch a web browser and visit http://localhost:3000. If successful, you should see an NGINX web page the first time.*

### Stopping
Stop the container and retain all data settings.
```
$ docker-compose stop
```

### Tearing down
Stops all containers, removes them, and deletes the images. Add `--volumes` flag to remove all data volumes.
```
$ docker-compose down --volumes
```

### Run as enterprise with load balancing
Initialize to startup network running containers.
```
$ docker swarm init
```

#### Run as a virtual lab
This will now run a single service stack, as configured to run 5 container instances of our deployed image on one host.
```
$ docker stack deploy -c docker-compose.yml fw-start-lab
```

#### Viewing services
This gets the service ID for one service in our application.
```
$ docker service ls
```

List the **task** (a single container running in a service)
The named acronym resolves to fluent web enterprise load balancer to relate its purpose with other Docker services.
```
$ docker service ps fw-elb
```

## Troubleshooting
### Inspecting images
Use the `tag` or `id` of a running image to inspect. For example, if you want to inspect a running web service named 'fw-web' as shown from the listed images above. Inspection returns all configurations as set on an image. For example, would show you all running environment variables, system settings, network configurations etc.
```
$ docker inspect fw-web
```

### Listing local images
```
$ docker image ls
```

### Viewing running services
```
$ docker-compose ps
```

### Reading environment variables
For example, to see what `env` (environment) variables are available to the `web` service
```
$ docker-compose run web env
```

### To see other available commands
```
$ docker-compose --help
```

## Resources
- [Docker services](https://docs.docker.com/get-started/part3/#run-your-new-load-balanced-app)
- [Docker swarms](https://docs.docker.com/get-started/part4/#understanding-swarm-clusters)
- [Putting it all together](https://blog.codeship.com/docker-machine-compose-and-swarm-how-they-work-together/)


## Cleanup unused containers
Caution, when doing so as you will loose all data. Only do this if you want to completely delete everything about Docker and start over from scratch. Useful in the beginning while testing Docker configurarion and installation is working.
``` 
$ docker ps
$ docker stop 52e1ac102a3a
$ docker rm 52e1ac102a3a
```

List all installed images, then remove each one individually.
```
$ docker images
$ docker rmi 96d0f978ee83
```

You can also bundle together.
```
$ docker rmi 273374b463b8 96d0f978ee83
```



