import React from 'react';
import ReactDOM from 'react-dom';



class TopMenu extends React.Component {
        
    menuItem = [
        [ 'yandex' , 'https://yandex.ru' ] ,
        [ 'google' , 'https://www.google.com/' ]
    ]   
	Fields = {
	    'title':'Меню'
	} 	
    render(){
     
        return (
            
            <div>
                
                <div className='top-menu'>
                    <h1>{this.Fields['title']}</h1>
                    
                        
                        {this.menuItem.map(n =>
                            <a href={n[1]}>{n[0]}</a> 
                        )}
                
                    
                </div>
            </div>
       )
            
  
    }    
 
}

export default TopMenu;