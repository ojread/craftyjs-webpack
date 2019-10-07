const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        // Generate our index.html file using html-webpack-template.
        new HtmlWebpackPlugin({
            title: 'crafty.js webpack',
            inject: false,
            template: HtmlWebpackTemplate,
            appMountId: 'app',
            headHtmlSnippet: '<style>body{margin:0;}</style>',
            meta: [
                {
                    name: 'description',
                    content: 'My crafty.js game',
                },
            ],
        }),
        // Automatically import crafty.js into all our modules.
        new webpack.ProvidePlugin({
            Crafty: 'craftyjs/dist/crafty-min',
        }),
    ],
    resolve: {
        alias: {
            // Import relative to project root with "~".
            '~': path.resolve('src'),
        },
    },
};
