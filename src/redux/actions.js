// src/redux/actions.js
export const fetchItems = () => async (dispatch) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: data.results });
    } catch (error) {
      dispatch({ type: 'FETCH_ITEMS_ERROR', payload: error.message });
    }
  };
  