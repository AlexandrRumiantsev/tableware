import {
  urlAdd,
  urlGet,
    type
  } from '../constants/Menu'
  import axios from 'axios';
  export function registration(data , callback) {
  

  
    return (dispatch) => {
      dispatch({
        type: 'GET_DATA_REQUEST'
      })
      
      axios.post('http://alexweber.ru:4001/'+urlAdd, 
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
        callback(response);
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










    export function autorize(data) {


      console.log('xxxxx');
      return (dispatch) => {
        dispatch({
          type: 'GET_DATA_REQUEST'
        })
        console.log(data);
        axios.post('http://alexweber.ru:4001/'+urlGet, 
        {
          login: data.getElementsByTagName('input').name__log.value,
          password: data.getElementsByTagName('input').name__pas.value
        })
        .then(function (response) {
          
          dispatch({
              type: 'GET_DATA_SUCCESS',
              payload: response
          })
          callback(response);
        })
        .catch(function (error) {
          console.log(error);
          dispatch({
              type: 'GET_DATA_FAILURE',
              payload: error,
              error: true
            })
        });
        }
        
      }
  
        
      
  
