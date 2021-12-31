/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_ALL,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return posts.filter((post) => post.id !== action.payload);
    case UPDATE_POST:
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
