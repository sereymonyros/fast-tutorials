
# Getting starting in Modern Web development

## Understanding project folder configuration
### 'app'
This folder is used as the primary working application directory where source code lives. This is the primary application being built.

### 'build'
This folder contains webpack configuration. When webpack builds for production scenarios this folder will populate a `/public` directory. The `public` directory will contain all build files.

### 'root'
This folder contains production server configuration files in structure compatible with the OS running the application.

## Installing application dependencies
Change directory inside /web-site and install pre-requisites node packages.
```
$ cd ./web-site
$ npm i
```

## Working without Docker, in local development environment
Leverage Webpack capability to build web application and run locally while making web application changes.

Change directory inside /web-site and install pre-requisites.
```
$ cd ./web-site
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

