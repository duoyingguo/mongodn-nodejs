var express = require('express');
var app = express();

// 创建mongodb连接 mongodb://<user>:<password>@<host>:<port>/<database>
var mongoose = require('mongoose');
var url = 'mongodb://62.234.4.189:27017/demo';
mongoose.connect(url,{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB连接异常：'));

// 使用BodyParser中间件来解析客户端请求
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// 在/position使端点使用路由组件
var positionn = require('./routes/position');
app.use('/position',positionn);

// 设置服务监听端口
var port = 8888;

// 启动服务
app.listen(port,function(){
    console.log('仓位记录管理服务运行中.....')
});