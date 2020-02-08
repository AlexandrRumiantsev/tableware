import {
    url,
    type
  } from '../constants/Menu'
  import axios from 'axios';
  export function registration(data) {
  

  
    return (dispatch) => {
      dispatch({
        type: 'GET_DATA_REQUEST'
      })
      
      axios.post('http://alexweber.ru:4001/'+url, 
      {
        login: data.getElementsByTagName('input').name__log.value,
        password: data.getElementsByTagName('input').name__pas.value,
        name: data.getElementsByTagName('input').name__input.value ,
        role: 'User',
      })
      .then(function (response) {
        console.log(response);
        dispatch({
            type: 'GET_DATA_SUCCESS',
            payload: response
        })
      })
      .catch(function (error) {
        console.log(response);
        dispatch({
            type: 'GET_DATA_FAILURE',
            payload: error,
            error: true
          })
      });
      }
      
    }










    export function autorize(type , url , nameSearch) {


  
        
      
    }
