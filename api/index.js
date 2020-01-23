const express = require("express");
const app = express();

const qs = require('querystring');
//Обход CORS Блокировки
var cors = require('cors');
app.use(cors());

var http = require('http').Server(app);
var mysql = require('mysql');

var config = require('./config');

(function(){
  "use strict";
  
   
 app.use(function (req, res, next) {
    next();
 });
    
 app.get('/', function(req, res){

    var con = mysql.createConnection({
        host: config.data.host,
        user: config.data.login,
        password: config.data.password,
        database: config.data.nameBase
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    }); 
    
    var sql = "SELECT * FROM `goods` ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
  
    res.send('Hello world');
 });
  
 http.listen(4000, ()=>{
      console.log('СЕРВЕР ЗАПУЩЕН');
 });  
 
})();