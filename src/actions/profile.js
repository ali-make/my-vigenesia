import { EDIT_PROFILE } from "../constants/actionTypes";
import * as api from "../api";

export const edit_profile = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editProfile(id, formData);
    dispatch({ type: EDIT_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
