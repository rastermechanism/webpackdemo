const path = require('path');
module.exports = {    
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: 'bundle.js' ,  // all this files are in memory so you can't find dist/bundle.js nor assets so don't be amazed.
        // to generate bundle file for production you need to run npm run build. It will spitt the bundle.js in dist folder. 
        //webpack-dev-server surve files from memory.
        publicPath: "/assets/", // string             
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'www'),     
        historyApiFallback: true,
        inline: true
    },

    module: {
        loaders: [
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            }
        ]
    }
}