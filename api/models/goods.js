module.exports =  class goods {
  
  getList(con , callback){
   
    var sql = "SELECT * FROM `goods` ";
     con.query(sql, function (err, result) {
        if (err) throw error

        callback(
            JSON.stringify(result) 
        );
    
    });

  }
  
   getItem(con , callback , id){
       console.log(id);
    var sql = "SELECT * FROM `goods` where id="+id;
    
    con.query(sql, function (err, result) {
        if (err) throw err

        callback(
            JSON.stringify(result) 
        );
    
    });
    
   }
   
   
   delItem(con , callback , id){

    var sql = "DELETE FROM `goods` where id="+id;
    
    con.query(sql, function (err, result) {
        if (err) throw error

        callback(
            'true'
        );
    
    });
    
   }
  
   addItem(con , callback , data){
    console.log('addItem');
    var arData = JSON.parse(data); 
    var id = `f${(+new Date).toString(16)}`;
    var sql = "INSERT INTO `goods`(`title`, `discr`, `json`, `id`) VALUES ( '"+arData['title']+"' , '"+arData['discr']+"' , '"+arData['json']+"' , '"+id +"')";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw error

        callback(
            'true'
        );
    
    });
    
    }
    
    uppItem(con , callback , data){
        console.log('uppItem');
        console.log(data);
        var arData = JSON.parse(data); 
        var sql = "UPDATE `goods` SET `title`='"+arData['title']+"',`discr`='"+arData['discr']+"',`json`='"+arData['json']+"' WHERE id='"+arData['id']+"'";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err
    
            callback(
                'true'
            );
        })
    }    
  
  constructor(connect , action , callback) {
     
      switch(action){
        case 'getList':
             this.getList(connect , callback);
        break;
      }
      
      if(action[0] == 'getItem')
            this.getItem(connect , callback , action[1]);
      if(action[0] == 'delItem')
            this.delItem(connect , callback , action[1]);
      if(action[0] == 'addItem')
            this.addItem(connect , callback , action[1]);
      if(action[0] == 'uppItem')
            this.uppItem(connect , callback , action[1]);
  }
}