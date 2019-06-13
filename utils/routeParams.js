/*
 * @Author: liyaxing 
 * @Date: 2019-06-12 13:36:38 
 * @Last Modified by: liyaxing
 * @Last Modified time: 2019-06-12 14:43:16
 */
//
const getParams = function(req){
    //处理get请求
    var param = req.query || req.params;
    //处理post请求body数据
    if (req.body && JSON.stringify(req.body) != '{}') {
        param = req.body
    }
    return param
}

module.exports = getParams