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
  },
  [mutationTypes.SET_USER_BY_ID](state, payload) {
    state.selectedUser = formatUserData(state, payload);
  },
  [mutationTypes.UPDATE_DETAIL_MUTATION](state, payload) {
    state.users.forEach((a, index) => {
      if (a.id === payload.id) state.users[index] = setFormatUserData(payload);
    });
  },
  [mutationTypes.SET_IS_DETAIL_LOADING](state, payload) {
    state.isUserDetailLoading = payload;
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

const formatUserData = (state, payload) => {
  const user = state.users.filter(a => a.id === payload.id)[0];
  const formattedUser = {};
  if (!user) {
    return {};
  }
  formattedUser["id"] = user.id;
  formattedUser["firstName"] = user.name.split(" ")[0];
  formattedUser["lastName"] = user.name.split(" ")[1];
  formattedUser["email"] = user.email;
  formattedUser["companyName"] = user.company.name;
  formattedUser["companyBs"] = user.company.bs;
  formattedUser["phone"] = user.phone;
  formattedUser["status"] = "Deactivate";
  formattedUser["image"] =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
  return formattedUser;
};

const setFormatUserData = payload => {
  const {
    id,
    firstName,
    lastName,
    email,
    companyBs,
    companyName,
    image,
    status,
    phone
  } = payload;

  return {
    id,
    name: `${firstName} ${lastName}`,
    company: { bs: companyBs, name: companyName },
    email,
    image,
    status,
    phone
  };
};
