const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js', //设置入口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                //loader逆执行，由最后一个开始，执行解析出来传送给前一个
                use: [
                    'vue-style-loader', //将css应用到vue组件中
                    'css-loader', //编译css中的@import、url等，再将这些转换为js模块
                    'sass-loader' //加载sass，将scss转换为css
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //设置导入文件时的路径别名
        },
        extensions: [".*", ".vue", ".js", ".json"], //设置导入文件制定的扩展名，不需要写扩展名了
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8090,
        open: true,
    }
}