const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "/src/index.js", // main js
	output: {
		path: path.resolve(__dirname, "dist"), // output folder
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					}
				},
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader", // for styles
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html", // base html
		}),
	]
};
