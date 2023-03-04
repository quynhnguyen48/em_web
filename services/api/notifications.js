import qs from "qs";
import axios from "../axios";

export const getNotifications = (filters) => {
  const query = qs.stringify({
    filters,
    populate: "*",
  });

  return axios.get(`/notifications?${query}`);
};

export const updateNotification = (id, data) => {
  return axios.put(`/notifications/${id}`, { data });
};

export const readAllNotifications = () => {
  return axios.post(`/notification/read-all`);
};
