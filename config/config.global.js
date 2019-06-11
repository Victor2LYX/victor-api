const os = require('os')
const envProd = (os.platform() === 'linux')
// const host = envProd ? 'https://cancerbook.genomics.cn' : 'localhost'

//全局默认配置
const CONFIG_GLOBAL_DEFAULT = {
    //do  anyting
}

//开发环境配置
const CONFIG_GLOBAL_DEV = {
    CONFIG_GLOBAL_DEFAULT,
    port: '3000',
    apiRouteRoot: '/dev',
    baseUrl: 'http://localhost:3000/dev',
    mongodbUrl: 'mongodb://lyx:lyx12345@localhost:27017/icarbonx',

}

//生产环境配置
const CONFIG_GLOBAL_PROD = {
    CONFIG_GLOBAL_DEFAULT,
    port: '3000',
    apiRouteRoot: '/prod',
    baseUrl: 'https://cancerbook.genomics.cn/prod',
    mongodbUrl: "mongodb://ccp:gen0mics.ccp@localhost:27017/ccp",

}

const CONFIG_GLOBAL = envProd ? CONFIG_GLOBAL_PROD : CONFIG_GLOBAL_DEV
module.exports = CONFIG_GLOBAL