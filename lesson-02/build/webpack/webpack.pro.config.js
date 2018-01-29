const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        title: 'FAST - Hello World (production)',
        template: './app/templates/index.html',
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
    }),
    new ExtractTextPlugin('assets/styles/m-[hash]-bundle.min.css')
];