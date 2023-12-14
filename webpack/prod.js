const {merge} = require('webpack-merge');
const common = require('./common.js');

module.exports = (env) => merge(common(env), {
    devtool: "source-map"
});