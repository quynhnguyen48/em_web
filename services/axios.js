import axios from "axios";
import { JWT_TOKEN } from "../constants/Authentication";

const instance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}/api`,
  baseURL: `https://api.echomedi.com/api`,

  timeout: 60000,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(JWT_TOKEN);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // handle refresh token
    }
    return Promise.reject(error);
  }
);

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;
