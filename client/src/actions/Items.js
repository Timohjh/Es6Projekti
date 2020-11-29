import { FETCH_ALL, CREATE, UPDATE, DELETE } from './actionTypes';
import * as api from '../api/index.js';

export const getItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItems();
        console.log(data);
        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
     console.log(error);
    }
};

export const createItem = (item) => async (dispatch) => {
    try {
      const { data } = await api.createItem(item);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateItem = (id, item) => async (dispatch) => {
    try {
      const { data } = await api.updateItem(id, item);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteItem = (id) => async (dispatch) => {
    try {
      await await api.deleteItem(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };