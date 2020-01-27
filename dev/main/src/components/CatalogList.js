import React from 'react';
import CatalogItem from './CatalogItem';
import ReactDOM from 'react-dom';

import '../styles/CatalogList/CatalogList.css';



class CatalogList extends React.Component {
        
    Fields = {
        'title': 'Каталог товаров'
    }   
		
    render(){
     
        return (
            <div className='goods'>
                <h1>{this.Fields['title']}</h1>
                <div className='goods__container'>
                    {this.props.dataArray.map(n =>
                    <CatalogItem data={n} /> 
                    )}
                </div>
            </div>
       )
            
  
    }    
 
}

export default CatalogList;