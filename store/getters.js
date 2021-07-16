import { getterTypes } from "./types";

export default {
  [getterTypes.USERS]: state => {
    return state.users;
  },
  [getterTypes.SELECTED_USER]: state => {
    return state.selectedUser;
  },
  [getterTypes.IS_DETAIL_LOADING]: state => {
    return state.isUserDetailLoading;
  }
};
