const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    output: {
        // filename: '[name].[hash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true
    },
    plugins: [
        new VueLoaderPlugin()
    ],

}