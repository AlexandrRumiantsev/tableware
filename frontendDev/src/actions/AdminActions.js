import {
  URL
} from '../constants/Admin'

export function setAdmin(data) {
  console.log('setAdmin');
  let formData = new FormData(data);
  console.log(formData);

  return (dispatch) => {
    dispatch({
      type: 'SET_DATA_ADMIN'
    })
    

    /*
    var request = new XMLHttpRequest();

    request.open(type, 'http://alexweber.ru:4001/'+url , true);
    if(nameSearch)
      request.open(type, 'http://alexweber.ru:4001/'+url+'?name='+nameSearch , true);
    
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
    
    
    request.send()
*/
    }
   
  }