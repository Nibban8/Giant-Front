import * as api from '../API';

// Creadores de Acciones

export const getParts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchParts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPart = (part) => async (dispatch) => {
  try {
    const { data } = await api.createPart(part);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
