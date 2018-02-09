# Lesson 02 - Learning with Fluent Web

# FAST Lesson 02 - Building your first 'hello world' website

This lesson covers the following topics:
1. Install and configure a basic Webpack implementation.
2. Install and import ReactJS.
3. Walk through entry point and templating
4. Walk through importing images
5. Walk through importing data with JSON
6. Walk through compiling CSS into header as a file
7. Walk through bundling JS
8. Walk through configuring Webpack
    * Configure for development
    * Configure for production
    * Build and deploy for both environments walking through the output

## Installing application dependencies
Ensure you're inside the /lesson-02 directory and install pre-requisites node packages.
```
$ npm i
```

## Working in local development environment
Leverage Webpack capability to build web application and run locally while making web application changes.

Build, and startup webpack server as development (http://localhost:1500).
```
$ npm run serve-dev
```

Build and compile for production. This will generate files into `./build/public` that can then be deployed into production.
```
$ npm run serve-pro
```