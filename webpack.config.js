var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    devServer: {
        contentBase: "./app"
    },
    entry: {
        react: "./app/react/main.coffee"
    },
    output: {
        path: path.join(__dirname, "react"),
        publicPath: "react/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
            { test: /\.js$/,    loader: "jsx" },
            { test: /\.jsx$/,   loader: "jsx?insertPragma=React.DOM" }
        ]
    }
};
