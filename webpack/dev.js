const {merge} = require("webpack-merge");
const common = require("./common.js");

module.exports = (env) => merge(common(env), {
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
});