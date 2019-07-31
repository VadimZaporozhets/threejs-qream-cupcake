const path = require('path');

const config = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    'eslint-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};

module.exports = config;
