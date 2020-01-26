import React from 'react';
import CatalogItem from './CatalogItem';
import ReactDOM from 'react-dom';



class CatalogList extends React.Component {
        
    Fields = {
        'title': 'Каталог товаров'
    }   
		
    render(){
     
        return (
            <div className='goods'>
                <h1>{this.Fields['title']}</h1>
                {this.props.dataArray.map(n =>
                  <CatalogItem data={n} /> 
                )}
            </div>
       )
            
  
    }    
 
}

export default CatalogList;