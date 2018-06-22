const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules:[
			{
				test:/.css$/,
				use:['style-loader','css-loader'],//从右往左写，webpack特性
				include:path.join(__dirname,'./src'),
				exclude:/node_modules/
			}
		]
	}
}