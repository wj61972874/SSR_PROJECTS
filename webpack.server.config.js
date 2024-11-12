const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'server/goods.json', to: 'goods.json' }, // 将 data.json 复制到 dist 目录
            ],
        }),
    ],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
};