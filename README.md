# FAST Tutorials Curriculum
A solution for setting up a complete development and production environment for the FAST Design Architecture (used by Fluent Web.)

This solution leverages ReactJS, Webpack, and Docker.

For greater detail view the [Web Application](/lesson-02/README.md) or [Website](/lesson-03/README.md).


## Curriculum lessons
Curriculum lesson's map directly to folder structure. For example, Lesson one, would be located in directory 'lesson-01'. Each lesson is intended to build upon the previous.

### Lesson 01
Prepares your computer for web development in open source for the absolute beginner.

### Lesson 02
Example simple hello world website running ReactJS, Webpack, Babel.

### Lesson 03
Example web application using Microsoft's Fluent Design System by importing Fluent Web React components and styles.

## Lesson folder configurations
within each lesson is a common folder structure.

### 'app'
This folder is used as the primary working application directory where source code lives. This is the primary application being built.

### 'build'
This folder contains webpack configuration. When webpack builds for production scenarios this folder will populate a `/public` directory. The `public` directory will contain all build files.

### 'root'
This folder contains production server configuration files in structure compatible with the OS running the application and used by Docker.


## Working with Docker
Each lesson includes Docker configuration files. For most people these can be ignored. For those interested in DevOps you can test your applications by running live production scenarios locally. Every lesson is production ready and deployable.
If you're not familiar with Docker, it brings mobility to any environment simplifying continuous development and delivery into production.

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
$ docker stack deploy -c docker-compose.yml m-start-lab
```

#### Viewing services
This gets the service ID for one service in our application.
```
$ docker service ls
```

List the **task** (a single container running in a service)
The named acronym resolves to Fluent Web enterprise load balancer to relate its purpose with other Docker services.
```
$ docker service ps m-elb
```

## Troubleshooting
### Inspecting images
Use the `tag` or `id` of a running image to inspect. For example, if you want to inspect a running web service named 'fw-web' as shown from the listed images above. Inspection returns all configurations as set on an image. For example, would show you all running environment variables, system settings, network configurations etc.
```
$ docker inspect m-web
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

## Ownership
Contact Fluent Web Questions <fwq@microsoft.com> for details on this repository.
