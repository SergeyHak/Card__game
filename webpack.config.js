const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV ==="production";

module.exports ={
    mode: isProduction ? "production" : "development",
    entry:"./static/js/choice_levels.js",
    output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
    clean:true,
    },
    module:{
        rules:[
            {test:/\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
            {test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type:"asset/resource"},
            {test:/\.(woff|woff2|eot|ttf|otf)$/i,
            type:"asset/resource"},            
        ],
    },
    plugins:[
     new CopyPlugin({
     patterns:[{from:"static", to:"static"}],   
     }),
        new HtmlWebpackPlugin({
    template: "./Card_game.html",
    }),       
    new MiniCssExtractPlugin(), 
],
optimization:{
    minimizer:["...", new CssMinimizerPlugin()],    
},
devtool: isProduction ? "hidden-source-map" : "source-map"// Для отслеживания ошибок
};
// {
//     test: /\.css$/,
//     use: ExtractTextPlugin.extract({
//       fallback: 'style-loader',
//       use: 'css-loader'
//     })
//   }