### webpack
### 4.0

webpack核心概念
>1. Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
>2. Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
>3. Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
>4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
>5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果

注意事项
> 1、webpack-cli必须要全局安装，否则不能使用webpack指令； 
2、webpack也必须要全局安装，否则也不能使用webpack指令。 
3、webpack4.x中webpack.config.js这样的配置文件不是必须的。 
4、默认入口文件是./src/index.js，默认输出文件./dist/main.js。

配置步骤
>1、创建工程目录； 
2、初始化工程目录：npm init。 
3、全局安装webpack-cli。 
4、全局安装webpack。 
5、webpack –mode development/production进行打包，可在package.json中配置dev和build的脚本，便只需运行npm run dev/build，作用相同。 
6、在webpack –mode development/production可串联设置其他参数。

本地项目
> 全局安装后可以使用 webpack命令，如果使用npm 进行打包，需要在当前项目中进行局部安装。

1. wepack 默认打包js文件
2. 打包sass文件，需要安装loader
> npm install style-loader sass-loader node-sass css-loader --save-dev
