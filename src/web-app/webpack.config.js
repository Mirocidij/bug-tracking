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

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`

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

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) {
        options.presets.push(preset)
    }

    return options
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devtool: isDev ? 'source-map' : 'nosources-source-map',
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, '..', 'main', 'resources', 'static')
    },
    resolve: {
        extensions: ['.js', '.ts', '.png', '.css', '.less', '.jsx', '.tsx']
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
                    to: path.resolve(__dirname, '..', 'main', 'resources', 'static')
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions(['@babel/preset-typescript'])
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions([
                        '@babel/preset-react'
                    ])
                }
            }
        ]
    }
}