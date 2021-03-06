const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const devMode = NODE_ENV !== 'production';
const isTest = NODE_ENV === 'test';

const babelConfig = require('./.babelrc.js');

module.exports = {
  output: {
    filename: devMode ? 'bundle.js' : 'bundle.[hash].js',
    chunkFilename: devMode
      ? '[name].lazy-chunk.js'
      : '[name].lazy-chunk.[hash].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', 'css'],
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              minimze: true,
              sourceMap: devMode,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: [
                autoprefixer({
                  browsers: ['last 1 versions', 'ie >= 11', '> 1%', 'not dead'],
                }),
              ],
              sourceMap: devMode,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode,
              includePaths: ['client/styles/main.scss'],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: ['img:src'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: devMode ? '[name].[ext]' : '[name].[hash].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: devMode ? '[name].[ext]' : '[name].[hash].[ext]',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['public/dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './static/favicons/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[chunkhash].css',
    }),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin([
      { from: `${__dirname}/static`, to: `${__dirname}/public/dist` },
    ]),

    isTest
      ? new BundleAnalyzerPlugin({
          generateStatsFile: true,
        })
      : null,
  ].filter(Boolean),
};
