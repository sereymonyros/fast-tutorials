# FAST Tutorials
This project is intended for those getting started on Fluent Web who want to fast track setting up a complete modern development and production environment.

All lessons leverage ReactJS, Webpack, and Docker. Docker is for advanced users and enables environment mobility from development to production if you're interested in deploying to production.

There are plans to include videos for each lesson. Until they are released each lesson resembles an example and functional website. The most common usage scenario may be to simply clone a lesson and use that as a starting point for your Fluent Web projects.

## Curriculum lessons
Curriculum lesson's map directly to the folder structure. For example, Lesson 01, would be located in directory 'lesson-01'. Each lesson is intended to build upon the previous.

To start working on a lesson change directory into the lesson's repository.

### Lesson 01
Prepares your computer for web development in open source for the absolute beginner with [Lesson-01](https://github.com/Microsoft/fast-tutorials/tree/master/lesson-01).

```bash
$ cd ./lesson-01
```

### Lesson 02
Example simple hello world website running ReactJS, Webpack, Babel with [Lesson-02](https://github.com/Microsoft/fast-tutorials/tree/master/lesson-02).

```bash
$ cd ./lesson-02
```

### Lesson 03
Example web application using Microsoft's Fluent Design System by importing Fluent Web React components and styles with [Lesson-03](https://github.com/Microsoft/fast-tutorials/tree/master/lesson-03).

```bash
$ cd ./lesson-03
```

### Lesson 04
Example web application for building a Fluent Web page using [Page, Grid, and Column](https://fluentweb.com/prototyping/getting-started/grid-layout) columns with [Lesson-04](https://github.com/Microsoft/fast-tutorials/tree/master/lesson-04)

```bash
$ cd ./lesson-04
```

## Lesson folder configurations
Within each lesson is a common folder structure.

### 'app'
This folder is used as the primary working application directory where source code lives. This is the primary application being built.

### 'build'
This folder contains webpack configuration. When webpack builds for production scenarios this folder will populate a `/public` directory. The `public` directory will contain all build files.

### 'root'
This folder contains production server configuration files in structure compatible with the OS running the application and used by Docker.


## Working with Docker (For advanced users and DevOps)
Each lesson includes Docker configuration files. For most people these can be ignored. For those interested in DevOps you can test your applications by running live production scenarios locally. Every lesson is production ready and deployable.
If you're not familiar with Docker, it brings mobility to any environment simplifying continuous development and delivery into production.

Leverage Docker for running as a staging environment to pre-validate and test that web application is ready for Continous Delivery into production.

### Installing and validating pre-requisites
Validate and view your Compose file.
```
$ docker-compose config
```

### Pre-Building
This is only required until there are no private node packages being used and this can then all be scripted in the Dockerfile.

Install all packages and run Webpack for production to generate the production files which can be copied up to the server container.
```
$ npm i
$ npm run serve-pro
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

*Launch a web browser and visit http://localhost:3000* The ports map directly to the lessons when testing Docker. So lesson-03 would have port 3000. Lesson-02 would use port 2000.

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
$ docker stop <container id>
```
Example
> $ docker stop 52e1ac102a3a

List all installed images, then remove each one individually.
```
$ docker images
$ docker rmi <container id>
```
Example
> $ docker rmi 273374b463b8

You can also bundle together.
```
$ docker rmi <container id> <container id>
```
Example
> $ docker rmi 273374b463b8 96d0f978ee83


## Ownership
Email Fluent Web Questions <fwq@microsoft.com> about this repository.
