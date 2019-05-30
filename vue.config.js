module.exports = {
    publicPath: '/',
    outputDir: 'dist',

    productionSourceMap: false,

    devServer: {
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: false,
        port: 8080,
        proxy: {
            '/api': {
                // target: 'http://124.156.160.86/',
                target: 'http://150.109.48.154',
                changeOrigin: true,
                secure: false,
                headers: {
                    Referer: 'http://150.109.48.154'
                },
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
};