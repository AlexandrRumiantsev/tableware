import React from 'react';

class Statistik extends React.Component {
  getStatistik(id){
      //Запрос к апи
  }  
  
  componentWillMount(){
    this.getStatistik(this.props.data.id);  
  }
  
  render(){
     
    return (
        <div>
            Статистика Товара
        </div>
    );
  
  }    
 
}

export default Statistik;