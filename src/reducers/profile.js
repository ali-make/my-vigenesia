import { EDIT_PROFILE } from "../constants/actionTypes";

const profileReducers = (profile = [], action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return profile.map((profile) =>
        profile.id === action.payload.id ? action.payload : profile
      );
    default:
      return profile;
  }
};

export default profileReducers;
