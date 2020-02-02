import { SET_API } from '../constants/Api'

const initialState = {
    data: 'данные',
    fetching: false
  }
  
  export default function setApi(state = initialState, action) {
    
    switch (action.type) {
        case 'GET_DATA_REQUEST':
          return {}, state, {api: action.payload ,  fetching: true }
    
        case 'GET_DATA_SUCCESS':
          return {}, state, {api: action.payload , fetching: false}

    
        default:
          return state;
      }
  
  }
