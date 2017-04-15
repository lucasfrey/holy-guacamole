'use strict';

import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import KssWebpackPlugin from 'kss-webpack-plugin';

const PATH = (str) => path.resolve(__dirname, str);
let config;

let common = {
	cache: true,
	context: __dirname,
	entry: {
		head: PATH('js/head/index.js'),
		index: [
			PATH('css/style.less'),
			PATH('js/index.js')
		]
	},
	output: {
		path: 'build',
		filename: 'bundle-[name].js',
		sourceMapFilename: '[file].map'
	},
	module: {
		loaders: [
			{
				test: /\.js$|\.json$|\.jsx$/,
				loader: 'babel-loader',
				include: PATH('js'),
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'autoprefixer-loader',
							query: { browsers: 'last 2 versions' }
						},
						{
							loader: 'less-loader',
							query: { sourceMap: true }
						}
					]
				}),
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: 'babel!svg-react'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'bundle-style.css',
			disable: false,
			allChunks: true
		}),
		new CleanWebpackPlugin('build', {
			root: process.cwd()
		})
	]
};

switch (process.env.npm_lifecycle_event) {
	case 'prod':
		config = merge(common, {
			module: {
				loaders: [
					{
						test: /\.js$|\.json$|\.jsx$/,
						enforce: 'pre',
						loader: 'eslint-loader',
						include: PATH('js'),
						exclude: [/node_modules/, PATH('js/head')]
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env': {'NODE_ENV': JSON.stringify('production')} }
				),
				new webpack.LoaderOptionsPlugin({
					minimize: true,
					debug: false
				}),
				new webpack.optimize.UglifyJsPlugin({
					output: {
						comments: false
					},
					compress: {
						drop_console: true,
						warnings: false
					},
					sourceMap: false
				})
			]
		});
		break;
	case 'styleguide':
		config = merge(common, {
			plugins: [
				new KssWebpackPlugin({
					source: ['css', 'js'],
					builder: 'kss',
					title: 'Style guide',
					homepage: 'README.md',
					css: ['../kss/css/style.css', '../kss/css/kss.css', '../build/bundle-style.css'],
					js: ['../build/bundle-index.js']
				})
			]
		});
		break;
	default:
		config = merge(common, {
			entry: {
				vendor: [
					'react',
					'react-dom'
				]
			},
			plugins: [
				new webpack.optimize.CommonsChunkPlugin({
					name: ['vendor', 'head']
				})
			],
			devtool: 'source-map'
		});
}

export default config;
