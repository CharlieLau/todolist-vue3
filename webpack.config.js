const path = require('path')

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    output: {
        // filename: '[name].[hash].js',
        filename:'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        inline: true,
        // hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true
    }

}