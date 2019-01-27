const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return module.exports = {
    entry: './src/app.js',
   //  './src/playground/redux-expensify.js',
   //  './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    // webpack.js.org for more info
    module: {
     rules: [{
       loader: 'babel-loader',
       test: /\.js$/,
       exclude: /node_modules/
     }, {
         test: /\.s?css$/,
         use: CSSExtract.extract({
           use: [
             {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
             {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
             }
           ]
         })
       }
     ]
     },
     plugins: [
      CSSExtract
     ],
    //  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
     devServer: {
       contentBase: path.join(__dirname, 'public'),
       historyApiFallback: true,
       publicPath: '/dist/'
     }
   };
};
