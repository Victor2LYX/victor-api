/*
 * @Author: liyaxing 
 * @Date: 2019-06-13 10:24:12 
 * @Last Modified by: liyaxing
 * @Last Modified time: 2019-06-13 16:28:04
 */

const os = require('os')
//全局常量，禁止其它地方再次生成常量，必须引用此处的envProd定义！！！
const envProd = (os.platform() === 'linux')
// const host = envProd ? 'https://cancerbook.genomics.cn' : 'localhost'

//全局默认配置
const CONFIG_GLOBAL_DEFAULT = {
    //do  anyting
}

//开发环境配置
const CONFIG_GLOBAL_DEV = {
    envProd,
    config_global_default:CONFIG_GLOBAL_DEFAULT,
    port: 3000,
    apiRouteRoot: '/nodeApi',
    baseUrl: 'http://localhost:3000/dev',
    mongodbUrl: 'mongodb://icarbonx:icarBonxlyx@localhost:27017/icarbonx',

}

//生产环境配置
const CONFIG_GLOBAL_PROD = {
    envProd,
    config_global_default:CONFIG_GLOBAL_DEFAULT,
    port: 3000,
    apiRouteRoot: '/nodeApi',
    baseUrl: 'https://cancerbook.genomics.cn/prod',
    mongodbUrl: "mongodb://ccp:gen0mics.ccp@localhost:27017/ccp",

}

const CONFIG_GLOBAL = envProd ? CONFIG_GLOBAL_PROD : CONFIG_GLOBAL_DEV
module.exports = CONFIG_GLOBAL