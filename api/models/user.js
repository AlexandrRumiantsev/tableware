module.exports =  class user {
  /*
  getList(con , callback){
   
    var sql = "SELECT * FROM `goods` ";
     con.query(sql, function (err, result) {
        if (err) throw error

        callback(
            JSON.stringify(result) 
        );
    
    });

  }
   getItemsByName(con , callback , name){
       //Старый вариант - поиск по всему слову
       //var sql = "SELECT * FROM `goods` where title= '" + name + "'";
       //Новый  вариант - поиск по первой букве слова
       var sql = "SELECT * FROM goods WHERE title LIKE '" + name + "%'"
    
        con.query(sql, function (err, result) {
            if (err) throw err
            console.log(result); 
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
  */
   getByLoginAndPass(con , callback , data , jwt){
    var sql = "SELECT * FROM `user` where login='" + data['login'] + "' AND password='" + data['password'] + "'";
    console.log(sql);
 
    con.query(sql, function (err, result) {
        if (err) throw err
       
        
            const user = {
                id: result['id'],
                login: result['login'],
                password: result['password'],
                name: result['name'],
                role: result['role']
            }
            
            jwt.sign({user},'SuperSecRetKey', { expiresIn: 60 * 60 }, (err, token) => {
                result[0].token = token;
    
                callback(
                    JSON.stringify(result) 
                );
            });
           
    });
   }
   addItem(con , callback , data){
    console.log('addItem');
    console.log(data);
     
    var id = `f${(+new Date).toString(16)}`;
    var sql = "INSERT INTO `user`(`login`, `password`, `name`, `id` , `role`) VALUES ( '"+data.login+"' , '"+data.password+"' , '"+data.name+"' , '"+id +"' , '"+data.role+"' )";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw error

        callback(
            'true'
        );
    
    });
    
    }
    /*
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
  */
  constructor(connect , action , callback , token) {
       if(action[0] == 'addItem')
            this.addItem(connect , callback , action[1]);
        if(action[0] == 'getByLoginAndPass')
            this.getByLoginAndPass(connect , callback , action[1] , token);        
      /*
      switch(action){
        case 'getList':
             this.getList(connect , callback);
        break;
      }
      
      console.log(action);
      if(action[0] == 'getItemsByName')
            this.getItemsByName(connect , callback , action[1]);
      if(action[0] == 'getItem')
            this.getItem(connect , callback , action[1]);
      if(action[0] == 'delItem')
            this.delItem(connect , callback , action[1]);
      if(action[0] == 'addItem')
            this.addItem(connect , callback , action[1]);
      if(action[0] == 'uppItem')
            this.uppItem(connect , callback , action[1]);
            */
  }
}