const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",
    entry: {
        app: './src/scripts/index.ts', // Entry point for the TypeScript code
        styles: './src/styles/style.scss', //Entry point for the SCSS code
    },
    output: {
        filename: '[name].bundle.js',  // Use [name] placeholder to ensure unique filenames
        path: path.resolve(__dirname, 'dist'),  // Output JavaScript files to the dist directory
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',  // Specify the output CSS filename
        }),
        new Dotenv(), // Load .env to process.env
    ],
    devServer: {
        contentBase: './dist',
    },
};
