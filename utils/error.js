export const getErrorMessage = (error) => {
  return error?.response?.data?.error?.message || error?.message;
};
