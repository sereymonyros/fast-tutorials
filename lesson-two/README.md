
# FAST Lesson two
This lesson covers the following topics:
1. Install and configure a basic Webpack implementation.
1. Install and import ReactJS.
1. Walk through entry point and templating
1. Walk through importing images
1. Walk through importing data with JSON
1. Walk through compiling CSS into header as a file
1. Walk through bundling JS
1. Walk through configuring Webpack
    * Configure for development
    * Configure for production
    * Build and deploy for both environments walking through the output

At completion, you will have fully functioning simple Hello World Single Page Application.

## Understanding project folder configuration
### 'app'
This folder is used as the primary working application directory where source code lives. This is the primary application being built.

### 'build'
This folder contains webpack configuration. When webpack builds for production scenarios this folder will populate a `/public` directory. The `public` directory will contain all build files.

### 'root'
This folder contains production server configuration files in structure compatible with the OS running the application.

## Installing application dependencies
Change directory inside /lesson-two and install pre-requisites node packages.
```
$ cd ./lesson-two
$ npm i
```

## Working without Docker, in local development environment
Leverage Webpack capability to build web application and run locally while making web application changes.

Change directory inside /lesson-two and install pre-requisites.
```
$ cd ./lesson-two
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

