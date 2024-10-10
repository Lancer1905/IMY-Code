//Pieter Venter u23896257
const path = require("path");
module.exports = {
    entry: "./front_end/src/index.js",
    output: {
        path: path.resolve(__dirname, "front_end/public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: 
                    /node_modules/ ,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}