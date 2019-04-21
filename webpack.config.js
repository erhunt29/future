const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(gif|jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],

            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        port: 3000,
        compress: true,
        open: true,
        hot: true
    }
};