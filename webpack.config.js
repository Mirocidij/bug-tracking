const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'main', 'resources', 'clientApp', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src', 'main', 'resources', 'static', 'dist')
    }
}