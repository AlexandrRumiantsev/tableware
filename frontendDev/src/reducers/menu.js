
let data = sessionStorage.getItem('user');
console.log(JSON.parse(data));
const initialState = {}

if(JSON.parse(data)){
  console.log(JSON.parse(data));
  initialState.name = JSON.parse(data)[0].name;
  initialState.user = data;
  initialState.log = true;
  initialState.role = JSON.parse(data)[0].role;
}else{
  initialState.name = 'Аноним';
}


  

  export default function menu(state = initialState, action) {
  	 
    switch (action.type) {
        case 'GET_LOGIN_FAILURE':
          return {}, state, {user: action.arr ,  log: false }
          
        case 'GET_LOGIN_SUCCESS':
          if(action.arr.length == 2){
            alert('Неверный логин или пароль!')
            return {}, state, {user: action.arr , name: 'Аноним' , log: false }
          }else{
            sessionStorage.setItem('user', action.arr);
            return {}, state, {user: action.arr , name:  JSON.parse(action.arr)[0].name , log: true , role: JSON.parse(action.arr)[0].role }
          }
  
    
        default:
          return state;
      }
  }