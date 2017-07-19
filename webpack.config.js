const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/routes.js',
		html: './src/index.html'
	},
	output: {
		publicPath: 'build/',
		path: __dirname + '/build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread']
				}
			},
			{
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!less-loader',
				test: /\.less$/
			},
			{
				loader: 'url-loader?limit=00000',
				test: /\.(png|woff|woff2|eot|ttf|svg)$/
			},
			{
				exclude: /node_modules/,
				loader: 'file-loader?name=[name].[ext]', // keeps og filename
				test: /\.jpg$/
			},
			{
				exclude: /node_modules/,
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + '/src/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/assets',
				to: 'assets'
			}
		], {
			copyUnmodified: true
		})
	],
	watch: true
};
