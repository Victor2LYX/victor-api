/*
 * @Author: liyaxing 
 * @Date: 2019-06-13 10:24:12 
 * @Last Modified by: liyaxing
 * @Last Modified time: 2019-06-24 19:12:07
 */

const os = require('os')
//全局常量，禁止其它地方再次生成常量，必须引用此处的envProd定义！！！
const envProd = (os.platform() === 'linux')
// const envProd = true
// const host = envProd ? 'https://cancerbook.genomics.cn' : 'localhost'

//全局默认配置
const CONFIG_GLOBAL_DEFAULT = {
    envProd,
    port: 3000,
    mongodbUrl: 'mongodb://icarbonx:icarBonxlyx@localhost:27017/icarbonx',
}

//开发环境配置, 需要在web前端config.js  proxy转化为/dev
const CONFIG_GLOBAL_DEV = {
    ...CONFIG_GLOBAL_DEFAULT,
    apiRouteRoot: '/dev',
    baseUrl: `http://localhost:3000${this.apiRouteRoot}`,
}

//生产环境配置
const CONFIG_GLOBAL_PROD = {
    ...CONFIG_GLOBAL_DEFAULT,
    apiRouteRoot: '/prod',
    baseUrl: `http://localhost:3000${this.apiRouteRoot}`,
}

module.exports = (envProd ? CONFIG_GLOBAL_PROD : CONFIG_GLOBAL_DEV)
