module.exports = {
    'action' : function(app , data , parserForm , jwt){
       
        app.get('/', function(req, res){

        });
        app.post('/addUser', parserForm ,  function(req, res){
            
            new data.user(data.connect , ['addItem',req.body], function(result){
                //console.log(result);
            });
             
        })
        app.post('/getByLoginAndPass', parserForm , function(req, res){
            new data.user(data.connect , ['getByLoginAndPass',req.body], function(result){
                res.send(JSON.stringify(result));
            },
            jwt
            );
        });
        /*
        app.get('/getCatalog', function(req, res){
           new data.goods(data.connect , 'getList', function(result){
                res.send(result);
            });
        })
        
        app.get('/getItemsByName', function(req, res){
             //console.log(res)
            //console.log(req.query.name)
           new data.goods(data.connect , ['getItemsByName' , req.query.name], function(result){
                res.send(result);
            });
        })
        
        app.post('/getItem', function(req, res){

            new data.goods(data.connect , ['getItem',req.headers.id], function(result){
                console.log(result);
            });
            
        })
        app.post('/delItem', function(req, res){
            
            new data.goods(data.connect , ['delItem',req.headers.id], function(result){
                console.log(result);
            });
             
        })
        app.post('/addItem', function(req, res){
            
            new data.goods(data.connect , ['addItem',req.headers.data], function(result){
                console.log(result);
            });
             
        })
        app.post('/uppItem', function(req, res){

            new data.goods(data.connect , ['uppItem',req.query.data], function(result){
                console.log(result);
            });
             
        })
        */
    }
}