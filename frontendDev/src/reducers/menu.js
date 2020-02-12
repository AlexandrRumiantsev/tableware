
const initialState = {
    name: 'Аноним'
  }
  
  export default function menu(state = initialState, action) {
  	 
    switch (action.type) {
        case 'GET_LOGIN_FAILURE':
          return {}, state, {user: action.arr ,  log: false }
          
        case 'GET_LOGIN_SUCCESS':
          if(action.arr.length == 2){
            alert('Неверный логин или пароль!')
            return {}, state, {user: action.arr , name: 'Аноним' , log: false }
          }else return {}, state, {user: action.arr , name:  JSON.parse(action.arr)[0].name , log: true }
  
    
        default:
          return state;
      }
  }