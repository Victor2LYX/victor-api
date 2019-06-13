const express = require('express');
const {getParams} = require('../utils/baseUtil');

const router = express.Router()

 /*
  * 接受wxPay支付回调回来的数据
  * 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
  * (遇到更新就更新数据库)
  */
 router.all('/wxPayResponse', function (req, res, next) {
     var param = getParams(req)
        res.json({errMsg:'success'})
     
 })
 
 module.exports = router;