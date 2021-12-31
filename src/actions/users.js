import { GET_USER } from "../constants/actionTypes";
import * as api from "../api";

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
