const path = require("path");
const webpack = require('webpack');
const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;
const bundleOutputDir = "./wwwroot/dist";
const baseUrl = path.join(__dirname, "wwwroot");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = (env) => {
    return {
        entry: {
            main: "./wwwroot/ts/modularToDoList",
            fake: "./wwwroot/ts/fake"
        },
        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].chunk.js",
            path: path.join(__dirname, bundleOutputDir),
            publicPath: 'dist/'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        optimization: {
            minimizer: env && env.prod ? [
                new UglifyJsPlugin(),
                new OptimizeCSSAssetsPlugin({})
            ] : [],
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    common: {
                        minChunks: 2,
                        minSize: 0
                    }
                }
            }
        },
        mode: env && env.prod ? "production" : "development",
        //devtool: "source-map"
        module: {
            rules: [
                { test: /\.ts$/, use: 'awesome-typescript-loader' },
                { test: /\.html$/, use: 'raw-loader' },
                {
                    test: /\.(png|woff|woff2|eot|ttf|jpg|jpeg|gif|svg)$/,
                    use: 'url-loader?limit=10000'
                },
                {
                    test: /\.css$/,
                    sideEffects: true,
                    use: env && env.prod ? [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: './'
                            }
                        },
                        "css-loader"
                    ] : ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [

            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(env && env.prod ?
            [
                new MiniCssExtractPlugin({
                    filename: "[name].css",
                    chunkFilename: "[id].css"
                })
            ] :
            [

                new SourceMapDevToolPlugin({
                    // Remove the line below if you prefer inline source maps
                    filename: '[file].map',
                    // Point sourcemap entries to the original file locations on disk
                    moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
                })
            ])
    };
};