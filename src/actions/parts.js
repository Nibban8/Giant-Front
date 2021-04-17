import * as api from '../API';

// Creadores de Acciones

export const getParts = () => async (dispatch) => {
  try {
    const data = await api.fetchParts();
    dispatch({ type: 'FETCH_ALL', payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
