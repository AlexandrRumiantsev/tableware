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
const controllerGoods = require('./controllerGoods');
const controllerUser = require('./controllerUser');
const user = require('./models/user.js');

const bodyParser = require("body-parser");
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());

(function(){
    "use strict";
    
     var con = mysql.createConnection({
        host: config.data.host,
        user: config.data.login,
        password: config.data.password,
        database: config.data.nameBase
    });
    
     controllerGoods.action(
         app,
         {
           'connect':con,
           'goods':goods
         }
     );
     
     controllerUser.action(
         app,
         {
           'connect':con,
           'user':user
         },
         urlencodedParser
     );
   
    app.use(function (req, res, next) {
        next();
    });

  
 http.listen(4001, ()=>{
      console.log('СЕРВЕР ЗАПУЩЕН');
 });  
 
})();