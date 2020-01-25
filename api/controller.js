module.exports = {
    'action' : function(app , data){
        app.get('/', function(req, res){

        });
        app.get('/getCatalog', function(req, res){
           new data.goods(data.connect , 'getList', function(result){
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
    }
}