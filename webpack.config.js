const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const  MiniCssExtractPlugin  =  require ( " mini-css-extract-plugin " );
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(html)$/,
    	  loader: 'html-loader'
      },
      {
        test : /\.(sass|scss)$/ ,
        use: [ 
          'style-loader',
          'css-loader',
          'sass-loader'
         ]

      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      hash: true,
      template: __dirname + "/css/main.css"
    }),
    new HtmlWebpackPlugin({
      template: '!!html-loader?interpolate!./index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: 'source-map'
}

module.exports = config
