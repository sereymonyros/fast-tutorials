const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = developmentPlugins = [
    new HtmlWebpackPlugin({
        title: 'Fluent Web - Hello World (development)',
        template: './app/templates/index.html'
    }),
    new ExtractTextPlugin('assets/styles/fw-[name]-bundle.css')
];