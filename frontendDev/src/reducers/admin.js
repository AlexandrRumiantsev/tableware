import { SET_API } from '../constants/Admin'

const initialState = {
    data: 'данные',
    fetching: false
  }
  
  export default function setAdmin(state = initialState, action) {
    
    switch (action.type) {
        
    
        case 'SET_DATA_ADMIN':
          return {}, state, {admin: action.payload , fetching: true}

    
        default:
          return state;
      }
  
  }
