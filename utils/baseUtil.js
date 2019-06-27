/*
 * @Author: liyaxing 
 * @Date: 2019-06-12 13:36:38 
 * @Last Modified by: liyaxing
 * @Last Modified time: 2019-06-24 17:25:47
 */
const crypto = require('crypto')
const dataUtil = require('./dataUtil')

/*web端，加密生成post请求传输的body数据，也适用于get请求， 
 */
getSign = (syscode, secret, params, timestamp) => {
    if (!syscode || !secret || !params) {
        return false
    }
    let paramsStr = JSON.stringify(params)
    let tempObj = {}
    tempObj.syscode = syscode;
    tempObj.secret = secret;
    tempObj.timestamp = timestamp || dataUtil.getCurrentDateTime();
    tempObj.params = paramsStr

    let str = 'syscode=' + tempObj.syscode + '&secret=' + tempObj.secret + '&timestamp=' + tempObj.timestamp + '&params=' + tempObj.params
    let md5Str = crypto.createHash('md5').update(str).digest('hex');
    tempObj.sign = md5Str.toUpperCase()
    return tempObj
}

/* 处理request请求的入参，支持get/post请求
*/
getParams = (req) => {
    //处理get请求
    var param = req.query || req.params;
    //处理post请求body数据
    if (req.body && JSON.stringify(req.body) != '{}') {
        param = req.body
    }
    return param
}

/* 检查web传输过来的数据是否一致，true一致，false不一致
*/
checkSign = (args) => {
    if (!args || !args.sign) {
        return false
    }
    let str = 'syscode=' + args.syscode + '&secret=' + args.secret + '&timestamp=' + args.timestamp + '&params=' + args.params
    let md5Str = crypto.createHash('md5').update(str).digest('hex');
    return args.sign == md5Str.toUpperCase()
}

module.exports = {
    getSign,
    getParams,    
    checkSign
}