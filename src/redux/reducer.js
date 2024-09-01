// src/redux/reducer.js
const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ITEMS_SUCCESS':
        return { ...state, items: action.payload, loading: false };
      case 'FETCH_ITEMS_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default itemsReducer;
  