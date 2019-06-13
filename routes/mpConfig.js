/*
 * @Author: liyaxing 
 * @Date: 2019-06-13 17:20:26 
 * @Last Modified by:   liyaxing 
 * @Last Modified time: 2019-06-13 17:20:26 
 */
const express = require('express')
const { getParams, checkSign } = require('../utils/baseUtil')

const router = express.Router()
const mc = require('mongodb').MongoClient

const url = require('../utils/config.global').mongodbUrl

/*获取配置通用接口(只通过入参name)
 * */
router.all("/getCfgByName", function (req, res, next) {
    let param = getParams(req)
    let isCorrect = checkSign(param)
    param = JSON.parse(param.params)
    if (isCorrect && param.name) {
        mc.connect(url, function (err, db) {
            if (err != null) {
                res.json({ error: 'Cannot cannect to mongodb.' })
            } else {
                //mongo 3.0版本写法，
                // var coll = db.db('icarbonx').collection('wx_mp_config')
                //mongo 2.0版本写法，可以npm install mongodb@2 --save 降级mongodb
                var coll = db.collection('mp_config')
                if (param.name) {
                    coll.findOne({ name: param.name }, function (err, doc) {
                        if (doc) {
                            res.json(doc);
                            db.close()
                        }
                    })
                }
                else {
                    res.json({ 'notFound': true });
                }
            }
        })
    }
    else {
        res.json({ 'notFound': true });
    }

})

module.exports = router
