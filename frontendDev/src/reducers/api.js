import { SET_API } from '../constants/Api'

const initialState = {
    data: 'данные',
    fetching: false
  }
  
  export default function setApi(state = initialState, action) {
    
    switch (action.type) {
        
    
        case 'GET_DATA_SUCCESS':
          return {}, state, {api: action.payload , fetching: true}

    
        default:
          return state;
      }
  
  }
