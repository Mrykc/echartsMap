const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'
module.exports = {
    /* 部署应用包的基本URL */
    /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
    //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    /* 生产环境构建文件的目录 defalut: dist */
    outputDir: "dist",
    /* 放置生成的静态文件目录（js css img） */
    assetsDir: "static",
    /* 指定生成的index.html 输出路径 相对 default: index.html */
    indexPath: "index.html",
    /* 指定生成文件名中包含hash default: true */
    filenameHashing: true,
    /* 是否保存时 lint 代码 */
    lintOnSave: process.env.NODE_ENV === "production",
    /* 是否使用编译器 default: false */
    runtimeCompiler: false,
    /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
    // transpileDependencies: [],
    /* 生产环境的source map */
    productionSourceMap: true,
    // crossorigin: "",
    integrity: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        },
        plugins: [
            new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' }]),
            new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
            new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }]),
            new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers' }]),
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('./')
            })
        ],
    },
    devServer: {
        port: 8866,
        host: "0.0.0.0",
        https: false,
        // 自动启动浏览器
        open: false,
        proxy: {
            '/map': {
                target: 'https://geo.datav.aliyun.com/areas_v3/bound/',
                changOrigin: true,
                pathRewrite: {
                    '^/map': ''
                },
                headers: {
                    Referer: 'https://geo.datav.aliyun.com/areas_v3/bound/'
                }
            }
        }
    }
};
