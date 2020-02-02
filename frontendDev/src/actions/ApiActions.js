import {
  URL
} from '../constants/Api'

export function setApi(type , url , setting , postData) {


  
  return (dispatch) => {
    dispatch({
      type: 'GET_DATA_REQUEST'
    })
    

    
    var request = new XMLHttpRequest();

    request.open(type, 'http://alexweber.ru:4001/'+url , true);
    
    
    
    // Доработать
    request.setRequestHeader('accept', 'application/json');
    
    request.onreadystatechange = function () {
      // <4 =  ожидаем ответ от сервера
      if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300){
          let response = request.response;
          dispatch({
            type: 'GET_DATA_SUCCESS',
            payload: response
          })
        }else{
          dispatch({
            type: 'GET_DATA_FAILURE',
            payload: response.error,
            error: true
          })
        }
      }
    }
    
    if(type == 'POST')
      request.send(postData)
    else request.send()

    }

  }