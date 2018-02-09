/**
 * Sass Compiler
 * Compiles all Fluent Web Styles in the Node Package and then watches local directory for
 * changes to these files, or extensions of the base package styles. These files are all
 * compiled into a single bundle. Bundles exist for each region, theme, and brand. The
 * bundled CSS file should then be linked to in the head of your HTML page.
 *
 * Project hooks
 * The package.json file includes a "sass" script command which sets environment variable and executes the compiler. 
 * Webpack is then configured to execute this same script at the end of webpack compilation.
 * 
 * - Node Task: ./build/scripts/sass.js 
 * - NPM Script: "sass" located in package.json
 *      "sass": "cross-env NODE_ENV=development node ./build/scripts/sass.js --watch"
 * - Webpack: Using webpackShellPlugin executes to compile FW styles
 *      `npm run sass -- --watch`
 * - Package docs https://fluentweb.visualstudio.com/Fluent%20Web/_packaging?feed=ms.fw&package=%40ms-fw%2Ffw-stylesheets&version=1.25.360-beta.0&protocolType=Npm&_a=package 
 */
const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fwStyles = require('@ms-fw/fw-stylesheets');


let config = {
    dest: path.resolve('./build/public/assets/styles'),
    brands: ['orange'],
    minify: false,
    filename: (config) => {
        return `fw-${config.region}-${config.theme}-${config.brand}.css`
    }
}

switch (process.env.NODE_ENV) {

    case 'development':
        config.minify = false;
        console.log("Starting to compile FW styles for development");

        break;

    case 'production':
        config.minify = true;
        console.log("Starting to compile FW styles for production");

        break;
}

// Watch the file system to recognize changes in .scss files which
// will initiate an automatic recompile.
// TODO: Task #3669 : Update Sass comiler to recompile on save, not char change.
fwStyles.compile(config)

.then(() => {
    if (!argv.watch) { return; }

    console.log("Watching...");

    glob(path.resolve(__dirname, '../../app/assets/styles/', '**/*.scss'), (err, files) => {
        
        if (err) { throw err; }
        
        files.map((file) => {
            fs.watch(file, (event, fileName) => {
        
                // Exit if this is not a change event
                if (event !== 'change') return;

                fwStyles.compile(config);
            });
        });
    });
})

.catch((err) => {
    throw err;
});