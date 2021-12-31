import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: null, data });
  } catch (error) {
    console.log(error);
  }
};
export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
