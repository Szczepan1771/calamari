const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, '../build'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: "asset/resource"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Production',
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    API_SERVER: JSON.stringify(`${env.API_SERVER}`),
                    production: !!env.production
                }
            }),
            new MiniCssExtractPlugin(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', ".json", ".scss"]
        },
    }
}