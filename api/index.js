function isAuthenticated(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
    }
}




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
const jwt = require('jsonwebtoken');
const fs = require('fs');


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
         urlencodedParser,
         jwt
     );
   
    app.use(function (req, res, next) {
        next();
    });

  
 http.listen(4001, ()=>{
      console.log('СЕРВЕР ЗАПУЩЕН');
 });  
 
})();