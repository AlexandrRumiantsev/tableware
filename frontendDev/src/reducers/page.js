const initialState = {
    year: 2016,
    //photos: ['222ss']
  }
  
  export default function page(state = initialState, action) {
  
    switch (action.type) {
      case 'SET_YEAR':
        //return { ...state, year: action.payload }
        return {}, state, {year: action.payload}
      default:
        return state;
    }
  
  }