export const showToast = (ref, msg, type) => {
  //type value should be success, info, error.
  ref.$toast[type](msg);
  setTimeout(() => {
    closeToast(ref);
  }, 5000);
};

export const closeToast = ref => {
  ref.$toast.clear();
};
