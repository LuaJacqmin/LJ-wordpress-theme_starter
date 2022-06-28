const path = require('path') /* permet de résoudre un chemin relatif en chemin absolu */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')/* extrait le css dans son propre fichier */
const {CleanWebpackPlugin} = require('clean-webpack-plugin') /* efface les anciens fichiers lors du dev ou du build */

const dev = process.env.NODE_ENV === "dev"; //pour effectuer certaines actions seulement si on est en dev

let CSSloaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath:'../',
    },
  },
  {
    loader: 'css-loader', 
    options: {importLoaders: 1}
  },
]

if(!dev){
  CSSloaders.push('postcss-loader')
}

let config = {
  context: path.resolve(__dirname, ''),
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, './dist'), /* dossier dans lequel on va exporter le fichier */
    filename: 'scripts/bundle.js', /* le nom qu'il aura (+ le dossier ici) */
    assetModuleFilename: '[path][name][ext]',
    publicPath: "/dist/" /* indique où se trouve le dossier de sortie */
  },
  resolve:{
    alias: {
      '@': path.resolve('./src/assets'),
      '#': path.resolve('./src/scripts'),
      '-': path.resolve('./src/styles'),
      'src': path.resolve('./src'),
    }
  },
  devtool: dev ? "eval-cheap-module-source-map" : "source-map", //src map si build, montre le code dans le fichier source si en dev
  devServer: {
    contentBase: path.resolve('./'),
    port: '8000',
    writeToDisk: true
  },
  module: {
    rules: [
      {
        /* import du javascript */
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        /* import du css */
        test: /\.css$/,
        use: CSSloaders,
      },
      {
        /* import du scss */
        test: /\.scss$/,
        use: [...CSSloaders, 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource',
      },
      {
        test:  /\.(wav|mp3|mp4|ogg)$/i,
        type: 'asset/resource'
      },
      {
        test:  /\.pdf$/i,
        type: 'asset/resource'
      },
      {
        test:  /\.(json|webmanifest|xml)$/i,
        type: 'asset/resource'
      },
      {
        test:  /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'styles/main.css'
    }),
  ],
}

module.exports = config;