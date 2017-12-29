//console.log(__dirname)
// entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        'path': path.join(__dirname, 'public'), //absolute path
        'filename':'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        host: '127.0.0.1'
    }
};

//loader