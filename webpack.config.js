'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/gui/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Skreebo'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2016', 'react']
                    }
                }]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'skreebo.js'
    }
};

module.exports = config;
