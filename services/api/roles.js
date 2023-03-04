import qs from "qs";
import axios from "../axios";

export const getListRoles = (pagination, filters = {}) => {
  const query = qs.stringify({
    filters,
    populate: "permissions",
    pagination,
  });
  return axios.get(`/users-permissions/roles?${query}`);
};

export const getRoleById = (id) => {
  return axios.get(`/users-permissions/roles/${id}`);
};

export const deleteRole = (id) => {
  return axios.delete(`/users-permissions/roles/${id}`);
};

export const updateRole = (id, data) => {
  return axios.put(`/users-permissions/roles/${id}`, data);
};

export const createNewRole = (data) => {
  return axios.post("/users-permissions/roles", data);
};
