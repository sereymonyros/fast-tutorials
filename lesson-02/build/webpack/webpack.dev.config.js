const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = developmentPlugins = [
    new HtmlWebpackPlugin({
        title: 'FAST - Hello World (development)',
        template: './app/templates/index.html'
    }),
    new ExtractTextPlugin('assets/styles/m-[name]-bundle.css')
];