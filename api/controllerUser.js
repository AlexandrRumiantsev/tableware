module.exports = {
    'action' : function(app , data){
        app.get('/', function(req, res){

        });
        app.post('/addUser', function(req, res){

            new data.user(data.connect , ['addItem',res.req.query], function(result){
                console.log(result);
            });
             
        })
        app.get('/getByLoginAndPass', function(req, res){
            new data.user(data.connect , ['getByLoginAndPass',res.req.query], function(result){
                console.log(result);
            });
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