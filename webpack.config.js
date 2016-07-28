var path = require('path');
var webpack = require('webpack');
var Promise = require('es6-promise').Promise;
// 解决 css 模块错误问题
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 定义文件夹路径  node path 模块
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 样式独立打包文件

var ROOT_PATH = path.resolve(__dirname);
// 当前目录
var APP_PATH = path.resolve(ROOT_PATH, 'src');
// 当前目录 + \src
var BULID_PATH = path.resolve(ROOT_PATH, 'bulid');
// 当前目录 + \bulid
// 
// console.log(webpack);
// H:\test\webdemo\src

module.exports = {
    // 页面入口配置
    entry: {
        index: APP_PATH
    },
    // 入口文件输出配置
    output: {
        path: BULID_PATH,
        publicPath: '../', //服务器根路径
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=es2015,presets[]=stage-0'
            },
            // 加载到 页面样式
            //    {
            //     test: /\.css$/,
            //     loaders: ['style', 'css'],

            // },
            // {
            //     test: /\.less/,
            //     loaders: ['style', 'css', 'less'],
            // }, 
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1200&name=[hash].[ext]'
                    // loader: 'file-loader?name=img/[hash:8].[name].[ext]'

            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    // 生成 HTML文件
    plugins: [
        // new HtmlwebpackPlugin({
        //  title:'Hello Word app'
        // })
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("./css/[name].css") //, {allChunks: true}
    ],
    // 配置服务
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
};
