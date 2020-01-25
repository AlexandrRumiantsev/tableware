const express = require("express");
const app = express();
const goods = require('./models/goods.js');
const qs = require('querystring');
//Обход CORS Блокировки
var cors = require('cors');
app.use(cors());
var http = require('http').Server(app);
var mysql = require('mysql');
var config = require('./config');
const controller = require('./controller');

(function(){
    "use strict";
    
     var con = mysql.createConnection({
        host: config.data.host,
        user: config.data.login,
        password: config.data.password,
        database: config.data.nameBase
    });
    
     controller.action(
         app,
         {
           'connect':con,
           'goods':goods
         }
     );
   
    app.use(function (req, res, next) {
        next();
    });

  
 http.listen(4001, ()=>{
      console.log('СЕРВЕР ЗАПУЩЕН');
 });  
 
})();