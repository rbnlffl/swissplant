const webpack = require('webpack');
const merge = require('webpack-merge');
const babelConfig = require('./babel.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prod = process.argv.includes('--prod');
const stats = process.argv.includes('--stats');

let config = {
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: babelConfig
        }]
    }
};

if (prod) {
    config = merge(config, {
        devtool: false,
        mode: 'production'
    });
}

if (stats) {
    config = merge(config, {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static'
            })
        ]
    });
}

module.exports = config;
