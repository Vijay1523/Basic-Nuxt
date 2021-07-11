import instance from "../common/axiosInstance";

export const getData = () => {
  return instance.get("users");
};
