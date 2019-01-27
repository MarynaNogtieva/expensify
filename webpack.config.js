const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return module.exports = {
    entry: './src/app.js',
   //  './src/playground/redux-expensify.js',
   //  './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
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
         use: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       }
     ]
     },
     devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
     devServer: {
       contentBase: path.join(__dirname, 'public'),
       historyApiFallback: true
     }
   };
};


