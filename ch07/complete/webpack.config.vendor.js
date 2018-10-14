const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    resolve: {
        extensions: ['.js']
    },
    entry: {
        vendor: ['bootstrap', 'jquery',
            'bootstrap/dist/css/bootstrap.css'],
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        publicPath: 'dist/',
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), 
        new webpack.DllPlugin({
            path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};