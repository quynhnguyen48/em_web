import axios from "../axios";

export const getMediaLibrary = () => {
  return axios.get(`/upload/files?sort=createdAt:DESC`);
};

export const deleteMediaFile = (id) => {
  return axios.delete(`/upload/files/${id}`);
};

export const updateMediaFile = (id, formData) => {
  return axios.post(`/upload?id=${id}`, formData);
};

export const getMediaLibraryByName = (name) => {
  return axios.get(`/upload/files?_q=${name}`);
};

export const uploadMedia = (formData) => {
  return axios.post(`/upload`, formData);
};
