import React from 'react';

class CatalogList extends React.Component {
  render(){
     
     return (
        <div>
            Каталог лист
            {
            
                this.props.dataArray.map(n => 
                
                    <div className='goods' key={n.id}>{
                        n.title
                    }</div>
                
                
                )
                
            }
            { console.log(this.props.dataArray) }
        </div>
    );
  
  }    
 
}

export default CatalogList;