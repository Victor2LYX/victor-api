/*
 * @Author: liyaxing 
 * @Date: 2019-06-11 15:26:56 
 * @Last Modified by: liyaxing
 * @Last Modified time: 2019-06-11 16:09:35
 */
//后续有需要再添加对应功能

const CONFIG_GLOBAL = require('./config/config.global');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const cors = require('cors');
var createError = require('http-errors');
const ejs = require('ejs');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set('port', CONFIG_GLOBAL.port || 3000);
//解决浏览器跨域访问问题，cors()可选obj类型参数，需要根据W3C标准设置Header
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//默认模板是ejs,可以改为html
// app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));

//解析wx支付返回的xml数据
app.use(bodyParser.xml({
  limit: '1MB',   // Reject payload bigger than 1 MB 
  xmlParseOptions: {
    normalize: true,     // Trim whitespace inside text nodes 
    normalizeTags: true, // Transform tags to lowercase 
    explicitArray: false // Only put nodes in array if >1 
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
* 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
* 放这里的原因是处理wxpay需要外网直接能访问
* */
app.use(CONFIG_GLOBAL.apiRouteRoot + '/payResponse', require("./routes/payResponse"));

// app.use(function (req, res, next) {
//   // 后台管理系统预览文件和上传文件跳过
//   if (/download|upload|excel/ig.test(req.originalUrl)) {
//     next();
//   } else {
//     let appId = ''
//     if (req.headers.referer && req.headers.referer.split('/').length > 3) {
//       appId = req.headers.referer.split('/')[3]
//     }
//     if (CONF_GLOBAL.globalConf.appIds[appId] || CONF_GLOBAL.globalConf.appIds[req.headers['app-id']]) {
//       next();
//     } else {
//       var err = new Error('非法访问');
//       err.status = 500;
//       next(err);
//     }
//   }
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(CONFIG_GLOBAL.apiRouteRoot +'/mp_config',require('./routes/mpConfig'))
app.use(CONFIG_GLOBAL.apiRouteRoot +'/payResponse',require('./routes/payResponse'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
