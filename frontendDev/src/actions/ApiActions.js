import {
  URL
} from '../constants/Api'

export function setApi(year) {
   
  return (dispatch) => {
    dispatch({
      type: 'GET_DATA_REQUEST'
    })
    
    /*
    $.ajax(url)
      .success(
        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: response.photos
        })
      )
      .error(
        dispatch({
          type: 'GET_DATA_FAILURE',
          payload: response.error,
          error: true
        })
      )
  }
  */

    
    var request = new XMLHttpRequest();
    request.open('GET', 'http://alexweber.ru:4001/getCatalog' , true);
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
    
    request.send()

    }
    
  }