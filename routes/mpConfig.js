
const express = require('express')
const router = express.Router()
const mc = require('mongodb').MongoClient
const routeParams = require('../utils/routeParams')
const url = require('../config/config.global').mongodbUrl


/*获取配置通用接口(只通过入参name)
 * */
router.all("/get_wx_mp_config_byName", function (req, res, next) {
    var param = routeParams(req)
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
})


module.exports = router


