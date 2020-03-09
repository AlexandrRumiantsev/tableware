import {
  URL
} from '../constants/Admin'
import axios from 'axios';
export function setAdmin(data) {
   
  function getBase64Image(img) { 
    var imges = new Image(); 
    imges.src = img.src;

    var canvas = document.createElement("canvas");  
    canvas.width = img.width;  
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");  
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");  
  
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");  
  }
  console.log(
    getBase64Image(
      data.querySelector('#img')
    )
  );
  //console.log(data.querySelector('#file-target'));
  
  let formData = new FormData();
  //formData.append('file', data.querySelector('#file-target'));

  formData.append('file', getBase64Image(
    data.querySelector('#img')
  ));

  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  };
  axios.post( 'http://alexweber.ru:4001/uploadfile',formData,config).then(function(){
    console.log('SUCCESS!!');
  })
  .catch(function(){
    console.log('FAILURE!!');
  });

  //axios.post("http://alexweber.ru:4001/addItem", formData);

  //axios.post('http://alexweber.ru:4001/addItem', 
  
  

   


  console.log('setAdmin');
  

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