
const initialState = {
    name: 'Аноним'
  }
  
  export default function menu(state = initialState, action) {
  	
    switch (action.type) {
        case 'GET_LOGIN_FAILURE':
          return {}, state, {user: action.arr ,  log: true }
          
        case 'GET_LOGIN_SUCCESS':
          return {}, state, {user: action.arr , name: nameUser , log: false}
  
    
        default:
          return state;
      }
  }