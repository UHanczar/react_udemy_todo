import webpack from 'webpack';
import path from 'path';
import envFile from 'node-env-file';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (e) {

}

export default {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
     path.resolve(__dirname, './app/App.js')
  ],
  externals: {
    jquery: 'jQuery',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  // ProvidePlugin loading nessesasy modules when they are required
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    // define plugin allows you to define plugins in bundle
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
      moment: path.resolve(__dirname, 'node_modules/moment/moment.js')
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, "app/components")
    ],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    // publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
