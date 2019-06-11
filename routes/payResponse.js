const express = require('express');
const router = express.Router()
const routeParams = require('../utils/routeParams');
 
 /*
  * 接受wxPay支付回调回来的数据
  * 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
  * (遇到更新就更新数据库)
  */
 router.all('/wxPayResponse', function (req, res, next) {
     var param = routeParams(req)
        res.json({errMsg:'success'})
     
 })
 
 module.exports = router;