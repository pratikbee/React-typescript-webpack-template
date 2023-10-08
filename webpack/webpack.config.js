const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =
{
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    target: "web",
    mode: "development",
    plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, "..", "./src/index.html") }) ],

  }

