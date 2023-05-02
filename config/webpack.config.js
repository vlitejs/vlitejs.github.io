const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'

	return {
		context: appDirectory,
		entry: {
			demo: resolveApp('src/demo/config.js')
		},
		watchOptions: {
			ignored: /node_modules/
		},
		devtool: isProduction ? false : 'source-map',
		output: {
			path: resolveApp('dist'),
			filename: 'scripts/[name].js',
			clean: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [resolveApp('src')],
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},
				{
					test: /\.css$/,
					include: [resolveApp('src'), resolveApp('node_modules/vlitejs'), resolveApp('../vlite')],
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									config: resolveApp('config/postcss.config.js')
								}
							}
						}
					]
				},
				{
					test: /\.svg$/,
					include: [resolveApp('src')],
					type: 'asset/source'
				}
			]
		},
		resolve: {
			extensions: ['.js', '.css'],
			alias: {
				shared: resolveApp('/src/shared'),
				package: resolveApp('../vlite')
			}
		},
		devServer: {
			static: {
				directory: resolveApp('/dist')
			},
			historyApiFallback: true,
			port: 3000,
			compress: true,
			hot: true,
			open: true
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin({
				filename: 'styles/[name].css',
				chunkFilename: 'styles/[name].css'
			}),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: resolveApp('public/index.html')
			}),
			new webpack.optimize.ModuleConcatenationPlugin(),
			new CopyPlugin({
				patterns: [
					{
						from: resolveApp('public'),
						to: resolveApp('dist'),
						globOptions: {
							ignore: ['**/index.html']
						}
					}
				]
			})
		],
		stats: {
			assets: true,
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false,
			children: false,
			entrypoints: false,
			excludeAssets: /.map$/,
			assetsSort: '!size'
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					extractComments: false,
					parallel: true,
					terserOptions: {
						compress: {
							// Drop console.log|console.info|console.debug
							// Keep console.warn|console.error
							pure_funcs: ['console.log', 'console.info', 'console.debug']
						},
						mangle: true
					}
				}),
				new CssMinimizerPlugin()
			],
			chunkIds: 'deterministic', // or 'named'
			removeAvailableModules: true,
			removeEmptyChunks: true,
			mergeDuplicateChunks: true,
			providedExports: false,
			splitChunks: false
		}
	}
}
