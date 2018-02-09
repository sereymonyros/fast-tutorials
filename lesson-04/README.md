# FAST Lesson 04 - Building Fluent Web pages
This tutorial explores how to build a Fluent Web page using [Page, Grid, and Column](https://fluentweb.com/prototyping/getting-started/grid-layout) columns.

* Constructing the page layout
* * Working with a *Grid*
* * Working with *Columns*
* * Adding a single [Content Placement](https://fluentweb.com/components/content-placement)

## Install Pre-requisites to access private packages
* Lesson 03, where Fluent Web packages for components and styles were imported onto a page. This is required if you haven't yet setup your `.npmrc` file for private access to VSTS.

*For Microsoft employees only. Will become open source soon for everyone to access.*

## Installing application dependencies
Ensure you're inside the /lesson-04 directory and install pre-requisites node packages.
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

## Troubleshooting
When running production for the first time there may be errors. This happens because the Fluent Web styles are required as imports in the `jsx` file, however, until the compiler runs the files do not yet exist. The workaround for this is to ensure sass is compiled before running Webpack server.

The solution, is to `npm run sass` before Webpack as shown in `package.json`.
```json
 "scripts": {
    "serve-pro": "npm run sass && cross-env NODE_ENV=production webpack --config ./build/webpack/webpack.config.js --progress",
    "serve-dev": "npm run sass && cross-env NODE_ENV=development node_modules/.bin/webpack-dev-server --config ./build/webpack/webpack.config.js --progress",
    "sass": "cross-env NODE_ENV=development node ./build/scripts/sass.js --watch"
  },
```

Errors if the solution above is not properly implemented.
```bash
ERROR in ./app/index.jsx
Module not found: Error: Can't resolve '../build/public/assets/styles/css/fw-west-european-default-orange.css' in '/Users/jdoe/Microsoft/Projects/FluentWeb/fast-tutorials/lesson-04/app'
 @ ./app/index.jsx 12:15-95
```

```bash
ERROR in ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css
Module not found: Error: Can't resolve '../fonts/FWMDL2.svg' in '/Users/jdoe/Microsoft/Projects/FluentWeb/fast-tutorials/lesson-04/build/public/assets/styles/css'
    @ ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css 7:1155-1185

ERROR in ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css
Module not found: Error: Can't resolve '../fonts/FWMDL2.ttf' in '/Users/jdoe/Microsoft/Projects/FluentWeb/fast-tutorials/lesson-04/build/public/assets/styles/css'
    @ ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css 7:1081-1111

ERROR in ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css
Module not found: Error: Can't resolve '../fonts/FWMDL2.woff' in '/Users/jdoe/Microsoft/Projects/FluentWeb/fast-tutorials/lesson-04/build/public/assets/styles/css'
    @ ./node_modules/css-loader!./node_modules/postcss-loader/lib!./build/public/assets/styles/css/fw-west-european-default-orange.css 7:1010-1041
```