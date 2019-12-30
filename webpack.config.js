const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name, root } = require('./project.config.json');

module.exports = {
    entry: `${root}/${name}/src/index.js`,
    output: {
        path: path.join(__dirname, `${root}/${name}/dist`),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff?2|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${root}/${name}/src/index.html`
        })
    ]
};
