import React from 'react';
//import './Catalog.css';
import axios from 'axios';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

const reducer = (state = {data: 'Hi'}, action) => {
    switch (action.type) {
        case 'SAY OK': return {data: 'OK'};
        case 'body': return {
            data: <h1>HEADER</h1>
        };
        default: return state;
    }
}
const store = createStore(reducer);

function get(){
      
    let projects = [];
    
        new Promise( ()=>
             axios.get(`http://alexweber.ru:4000/getCatalog`)
                  .then(res => {
                    
                    store.dispatch({type: 'SAY OK'});
                     store.dispatch({type: ''});
                  }) 
         ).then(() => {
            throw new Error('Где-то произошла ошибка');
        });     
    
      
 }
 
 get();
 
function Catalog() {
  return (
    <div className="App">
      <header>
        Шапка
      </header>
      <main> Ооо </main>
    </div>
  );
}

export default Catalog;