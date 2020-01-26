import React from 'react';
import CatalogList from './CatalogList';
import LoadingScreen from './LoadingScreen';
import TopMenu from './TopMenu';
import axios from 'axios';

class CatalogPage extends React.Component {
    getCatalog(){
      
        var catalog = [];
    
        new Promise( ()=>
             axios.get(`http://alexweber.ru:4001/getCatalog`)
                  .then(res => {
                    catalog = res.data;
                    this.setState({
                      arrCatalog: catalog,
                      renderPage: true
                    })
                    
                  }) 
         ).then(() => {
            throw new Error('Где-то произошла ошибка');
        });     
    
       
    }
  
    componentWillMount(){
      this.getCatalog();   
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    
    constructor(props) {
        super(props);
    
        this.state = {
          arrCatalog: [],
          renderPage: false
        };
    }
    render(){
        console.log(this.state.renderPage);
       if( this.state.renderPage == false){
            console.log('Рендерю загрузку экрана');
            return (
                
                <div className="App">
                  <header>
                    Шапка
                  </header>
                  <main>
                  
                    <LoadingScreen />
                    
                  </main>
                </div>
                
            );
       }else{
           console.log('Рендерю каталог'); 
            console.log(this.state.arrCatalog);
           return (
                
                <div className="App">
                  <header>
                    <TopMenu />
                  </header>
                  <main>
                  
                  <CatalogList dataArray={this.state.arrCatalog}/>
                    
                  </main>
                </div>
                
            );
       }
    }    
}

export default CatalogPage;