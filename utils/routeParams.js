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