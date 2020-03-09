const express = require("express");
const app = express();
const goods = require('./models/goods.js');
const qs = require('querystring');
//Обход CORS Блокировки
var cors = require('cors');
var corsOptions =  { 
  origin :  '*' , 
  optionsSuccessStatus :  200 , 
}
app.use(cors(corsOptions));
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
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken');
const fs = require('fs');

const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

app.use(upload.array()); 
app.use(express.static('public'));

console.log(upload);

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
         },
         urlencodedParser
     );
     
     controllerUser.action(
         app,
         {
           'connect':con,
           'user':user
         },
         urlencodedParser,
         jwt
     );
   
    app.post('/uploadfile', urlencodedParser , (req, res, next) => {
        console.log('/uploadfile');
        console.log(req.body.file);
        fs.writeFile('image.png', req.body.file, {encoding: 'base64'}, function(err) {
            console.log('File created');
        });
    })
    
    app.use(function (req, res, next) {
        next();
    });

  
 http.listen(4001, ()=>{
      console.log('СЕРВЕР ЗАПУЩЕН');
 });  
 
})();