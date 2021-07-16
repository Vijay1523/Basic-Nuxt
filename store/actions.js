import { getData } from "../services";
import { getterTypes, mutationTypes, actionTypes } from "./types";

export default {
  async [actionTypes.GET_USERS]({ commit }, payload) {
    const res = await getData();
    commit(mutationTypes.SET_USERS, res.data);
  },
  [actionTypes.GET_USER_BY_ID]({ getters, commit }, payload) {
    commit(mutationTypes.SET_IS_DETAIL_LOADING, true);
    const data = getters[getterTypes.USERS].filter(
      a => a.id === parseInt(payload)
    );
    commit(mutationTypes.SET_USER_BY_ID, data[0]);
    commit(mutationTypes.SET_IS_DETAIL_LOADING, false);
  },
  [actionTypes.ADD_USER]({ commit }, payload) {
    commit(mutationTypes.ADD_USER_MUTATION, payload);
  },
  [actionTypes.DELETE_USER]({ commit }, payload) {
    commit(mutationTypes.DELETE_USER_MUTATION, payload);
  },
  [actionTypes.UPDATE_DETAIL]({ commit }, payload) {
    commit(mutationTypes.UPDATE_DETAIL_MUTATION, payload);
  }
};
