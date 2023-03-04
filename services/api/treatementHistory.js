import qs from "qs";
import axios from "../axios";

export const getTreatmentHistories = (pagination, filters) => {
  const query = qs.stringify({
    filters,
    populate: ["user", "treatment", "history", "history.images"],
    publicationState: "preview",
    pagination,
  });

  return axios.get(`/treatment-histories?${query}`);
};

export const getInProgressTreatmentHistory = () => {
  return axios.get(`/treatment-history/in-progress`);
};

export const getTreatmentHistoryById = (id) => {
  const query = qs.stringify({
    populate: ["user", "treatment", "history", "history.images"],
  });

  return axios.get(`/treatment-histories/${id}?${query}`);
};

export const createTreatmentHistory = (data) => {
  return axios.post("/treatment-histories", {
    data,
  });
};

export const updateTreatmentHistory = (id, data) => {
  return axios.put(`/treatment-histories/${id}`, {
    data,
  });
};
