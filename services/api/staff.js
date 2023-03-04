import { USER_ROLE } from "constants/Authentication";
import qs from "qs";
import axios from "../axios";

export const getListStaffs = (pagination, filters = {}) => {
  const query = qs.stringify({
    filters: {
      ...filters,
      role: {
        type: {
          $notIn: [USER_ROLE.PUBLIC, USER_ROLE.AUTHENTICATED],
        },
      },
    },
    populate: "role",
    pagination,
    sort: ["createdAt:DESC"],
  });

  return axios.get(`/users?${query}`);
};

export const getStaffById = (id) => {
  const query = qs.stringify({
    populate: "*",
  });

  return axios.get(`/users/${id}?${query}`);
};

export const createStaff = (payload) => {
  return axios.post("/auth/local/register", payload);
};

export const updateStaff = (id, payload) => {
  return axios.put(`/users/${id}`, payload);
};
