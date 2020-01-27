import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/TopMenu/TopMenu.css';
import logo from '../img/TopMenu/logo.png';;

class TopMenu extends React.Component {
        
    menuItem = [
        [ 'yandex' , 'https://yandex.ru' ] ,
        [ 'google' , 'https://www.google.com/' ]
    ]  

	Fields = {
	    'title':'Женское счастье - оптом и в розницу'
    } 	
    

    render(){
     
        return (
            
            <div>
                
                <div className='top-menu'>
                    <div className='container-logo'>
                        <img src={logo} className="container-logo__item" alt="logo" />
                    </div>

                    <span className='top-menu__title'>{this.Fields['title']}</span>
                      
                    <nav>   
                        {this.menuItem.map(n =>
                            <a href={n[1]}>{n[0]}</a> 
                        )}
                    </nav>   
                
                    
                </div>
            </div>
       )
            
  
    }    
 
}

export default TopMenu;