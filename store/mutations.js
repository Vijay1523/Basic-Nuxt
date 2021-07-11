import { mutationTypes } from "./types";
export default {
  [mutationTypes.SET_USERS](state, payload) {
    state.users = payload;
  },
  [mutationTypes.ADD_USER_MUTATION](state, payload) {
    state.users = add(state, payload);
  },
  [mutationTypes.DELETE_USER_MUTATION](state, payload) {
    state.users = state.users.filter(a => a.id !== payload);
  },
  [mutationTypes.UPDATE_STATUS_MUTATION](state, payload) {
    state.users.forEach((a, index) => {
      if (a.id === payload.id)
        state.users[index].status = payload.status ? "Active" : "Deactive";
    });
  }
};

const add = (state, payload) => {
  const user = {
    id: state.users.length,
    name: payload.firstName + " " + payload.lastName,
    title: payload.designation,
    role: payload.role,
    department: payload.department,
    status: "Deactivate",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  };
  return [...state.users, user];
};
