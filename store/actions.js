import { getData } from "../services";
import { mutationTypes, actionTypes } from "./types";

export default {
  async [actionTypes.GET_USERS]({ commit }, payload) {
    const res = await getData();
    commit(mutationTypes.SET_USERS, res.data);
  },
  [actionTypes.ADD_USER]({ commit }, payload) {
    commit(mutationTypes.ADD_USER_MUTATION, payload);
  },
  [actionTypes.DELETE_USER]({ commit }, payload) {
    commit(mutationTypes.DELETE_USER_MUTATION, payload);
  },
  [actionTypes.UPDATE_STATUS]({ commit }, payload) {
    commit(mutationTypes.UPDATE_STATUS_MUTATION, payload);
  }
};
