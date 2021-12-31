/* eslint-disable import/no-anonymous-default-export */
import { GET_USER } from "../constants/actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return users;
  }
};
