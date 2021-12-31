import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import profile from "./profile";
import users from "./users";

export default combineReducers({ posts, auth, profile, users });
