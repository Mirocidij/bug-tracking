const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = ext => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader
        },
        'css-loader'
    ]

    if (ext) {
        loaders.push(ext)
    }

    return loaders;
}

const fileLoader = () => ['file-loader']

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, '..', 'static')
    },
    optimization: optimization(),
    devServer: {},
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, '..', 'static')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: fileLoader()
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: fileLoader()
            }
        ]
    }
}