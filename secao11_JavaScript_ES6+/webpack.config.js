module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './bundle.js',
    },
    devServeere: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /nodules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}