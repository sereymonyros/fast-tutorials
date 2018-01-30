# FAST Lesson 03 - Working with Fluent for Web
This tuturial explores how to import Fluent for Web components and styles (packages are private for Microsoft employees only, though becoming open source soon).

* Import Fluent for Web components private NPM package
* Import Fluent for Web styles private NPM package
    * Configure the Sass compiler
    * Create package script to run the compiler
    * Hook the compiler into Webpack
    * Watch the Sass/CSS folder for changes

## Install Pre-requisites to access private packages
For Microsoft employees only. Will become open source soon for everyone to access.

### Install and configure NPM
Configure feed authentication so the application can call into private dependencies.

1. Click on [Connect to feed](https://fluentweb.visualstudio.com/Fluent%20Web/_packaging?feed=ms.fw&_a=feed) to launch into a dialog containing more detailed instructions.
2. Select `npm` on the left navigation.
3. Create or edit the .npmrc file using Git Bash in the home folder
    ```
    $ vi ~/.npmrc
    ```
4. Add registry information into the .npmrc. This step can be skipped if the source repository already includes an .npmrc file with the registry information. If you run into problems, try to remove the `always-auth=true` to follow. The package registry is a private feed and should always be [scoped](https://docs.npmjs.com/misc/scope), our packages scope is `@ms-fw`.
    ```
    @ms-fw:registry=https://fluentweb.pkgs.visualstudio.com/_packaging/ms.fw/npm/registry/
    always-auth=true
    ```
5.  Add credentials to your user .npmrc file manually by clicking on the "Generate npm credentials" link and copying the contents revealed in the text area. It will look similar to this example:
    ```
    ; begin auth token
    //fluentweb.pkgs.visualstudio.com/_packaging/ms.fw@Release/npm/registry/:_authToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJuYW1laWQiOiI4N2JlZDgyNi05NmVlLTRkMzYtYTUzOS04Y2UxOTNlNGE0MjYiLCJzY3AiOiJ2c28uZHJvcF93cml0ZSB2c28ucGFja2FnaW5nX3dyaXRlIiwiYXVpIjoiN2NmZGI2ZmYtZDkzYi00Yk1NGItZjlkZmUwOGE4ZDcyIiwic2lkIjoiMDMwODhlOTYtYmFhMi00MzIyLWFiY2EtZDJmNjYxMjUwYTcwIiwiaXNzIjoiYXBwLnZzc3BzLnZpc3VhbHN0dWRpby5jb20iLCJhdWQiOiJhcHAudnNzcHMudmlzdWFsc3R1ZGlvLmNvbXx2c286ODFjODQ1NDktOTg5ZC00MWVhLWFhMjgtNmFjODhhMmFkZDibmJmIjoxNTA0MjA3NjYzLCJleHAiOjE1MTE5ODM2NjN9.zkHHSxN2AN2jjfgTHdwYltIzdKxxdHoQjXem-Sb-_M9y31R2oF0z-srl153S4iqNpB6BlgQK-peqn93mwKd9FwH4W9baDsufIZRLpMBbCz7c0BVHBdCEHJhPC961JcY8WXq0_-hxmhmgagxjmk9N4Xt6wUpOADsGiRTzjnslfVYSJ0Y1F1lE6BIrVbn4BOGEuT8nvD6VDA-vRwTtEw88d4LjOeJsLXUeQL7sUKOeG9d2UnTOvU6Alees0pC_GXeG00D46gKND85EJ2USkxrH_eH8n96hstKQYuz29xQKJeaIngNy-Dq2U_3Jo8uKr9NbJ8dV1CEDCAirpobQH9x1TQ
    //fluentweb.pkgs.visualstudio.com/_packaging/ms.fw@Release/npm/:_authToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJuYW1laWQiOiI4N2JlZDgyNi05NmVlLTRkMzYtY04Y2UxOTNlNGE0MjYiLCJzY3AiOiJ2c28uZHJvcF93cml0ZSB2c28ucGFja2FnaW5nX3dyaXRlIiwiYXVpIjoiN2NmZGI2ZmYtZDkzYi00Y2MyLTk1NGItZjlkZmUwOGE4ZDcyIiwic2lkIjoiMDMwODhlOTYtYmFhMi00MzIyLWFiY2EtZDJmNjYxMjUwYTcwIiwiaXNzIjoiYXBwLnZzc3BzLnZpc3VhbHN0dWRpby5jb20iLQiOiJhcHAudnNzcHMudmlzdWFsc3R1ZGlvLmNvbXx2c286ODFjODQ1NDktOTg5ZC00MWVhLWFhMjgtNmFjODhhMmFkZDQ3IiwibmJmIjoxNTA0MjA3NjYzLCJleHAiOjE1MTE5ODM2NjN9.zkHHSxN2AN2jjfgTHdwYltIzdKxxdHoQjXem-Sb-_M9y31R2oF0z-srl153S4iqNpB6BlgQK-peqn93mwKd9FwH4W9baDsufIZRLpMBbCz7c0BVHBdCEHJhPC961JcY8WXq0_-hxmhmgagxjmk9N4Xt6wUpOADsGiRTzjnslfVYSJ0Y1F1lE6BIrVbn4BOGEuT8nvD6VDA-vRwTtEw88d4LjOeJsLXUeQL7sUKOeG9d2UnTOvU6Alees0pC_GXeG00D46gKND85EJ2USkxrH_eH8n96hstKQYuz29xQKJeaIngNy-Dq2U_3Jo8uKr9NbJ8dV1CEDCAirpobQH9x1TQ
    ; end auth token


## Installing application dependencies
Change directory inside /lesson-03 and install pre-requisites node packages.
```
$ cd ./lesson-03
$ npm i
```

## Working in local development environment
Leverage Webpack capability to build web application and run locally while making web application changes.

Change directory inside /lesson-03 and install pre-requisites.
```
$ cd ./lesson-03
$ npm i
```

Build, and startup webpack server as production or development (http://localhost:1500).
```
$ npm run serve-pro
```
[or] 
```
$ npm run serve-dev
```
**Caution:**
Running production `npm run serve-pro` will fail the first time. This is a dependency bug on the Sass Compiler. Re-run it and it will succeed on the second time and publish the expected files under `/build/public/`.

## Working with Docker
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

*Launch a web browser and visit http://localhost:3000* The ports map directly to the lessons when testing Docker. So lesson-03 would have port 3000.

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



