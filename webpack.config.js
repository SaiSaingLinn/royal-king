const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PugPlugin = require('pug-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV === 'development';

const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './dist');

const PAGES_DIR = `${SRC}/pug/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

const getOptimization = () => {
  const optimizationConfig = {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  };

  if (!IS_DEV) {
    optimizationConfig.minimizer = [`...`, new CssMinimizerPlugin()]
  }

  return optimizationConfig;
};


// const getFileName = ext => IS_DEV ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const getFileName = ext => IS_DEV ? `[name].${ext}` : `[name].${ext}`;

module.exports = {
  context: SRC,
  mode: process.env.NODE_ENV,
  target: 'web',
  devtool: IS_DEV ? 'source-map' : false,
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    filename: getFileName('js'),
    path: DIST,
    assetModuleFilename: '[path][name][ext]'
  },
  devServer: {
    port: 4200,
    open: true,
    watchFiles: `${SRC}/**/*.pug`
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.css', '.scss', '.sass'],
    alias: {
      '@': SRC
    }
  },
  optimization: getOptimization(),
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: getFileName('css')
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
    new BeautifyHtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ],
  module: {
    rules: [{
      test: /\.(pug)$/,
      loader: PugPlugin.loader,
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader'
    }, {
      test: /\.s(a|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      }, 
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['autoprefixer', 'css-mqpacker']
          }
        }
      }, 'sass-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|otf)$/,
      type: 'asset/resource'
    }]
  }
};