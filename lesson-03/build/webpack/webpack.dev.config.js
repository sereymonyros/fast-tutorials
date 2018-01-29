const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = developmentPlugins = [
    new HtmlWebpackPlugin({
        title: 'Fluent for Web - Hello World (development)',
        template: './app/templates/index.html'
    }),
    new ExtractTextPlugin('assets/styles/m-[name]-bundle.css')
];