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
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,        // webpack 4 uses file loader for image loading, webpack 5 uses asset module for that
                type:'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,    // webpack 4 uses specific loaders, webpack 5 uses asset modules.
                type:"asset/inline"
            }

        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    target: "web",
    mode: "development",
    plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, "..", "./src/index.html") }) ],

  }

