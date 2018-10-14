const path = require("path");
const webpack = require('webpack');
const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;
const bundleOutputDir = "./wwwroot/dist";
const baseUrl = path.join(__dirname, "wwwroot");
module.exports = {
    entry: {
        main: "./wwwroot/ts/modularToDoList"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, bundleOutputDir),
        publicPath: 'dist/'
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            utilities: path.join(baseUrl, "src/utilities/")
        }
    },
    mode: "development",
    //devtool: "source-map"
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' },
        ]
    },
    plugins: [
        new SourceMapDevToolPlugin({
            // Remove the line below if you prefer inline source maps
            filename: '[file].map', 
            // Point sourcemap entries to the original file locations on disk
            moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') 
        })
    ]
};