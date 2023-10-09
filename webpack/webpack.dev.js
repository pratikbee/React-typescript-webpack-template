const webpack=require("webpack")


module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // CRA recommends for development environment

  plugins: [
    // we can add own plugins
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ANY_NAME_OR_STRING"),         // won't work in prod as defined in dev file webpack
    }),
    
  ],
};