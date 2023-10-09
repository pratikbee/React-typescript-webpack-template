const webpack=require('webpack')

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // we can add own plugins
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ANY_NAME_OR_STRING"), 
    }),
  ],
};