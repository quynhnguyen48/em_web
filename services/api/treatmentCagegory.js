import qs from "qs"
import axios from "../axios"

export const getTreatmentCategories = () => {
  const query = qs.stringify({
    populate: "*"
  })
  return axios.get(`/treatment-categories?${query}`);
};

export const createTreatmentCategory = (payload) => {
  const query = qs.stringify({
    populate: "*"
  })
  return axios.post(`/treatment-categories?${query}`, {
    data: payload
  });
}

export const updateTreatmentCategory = (id, payload) => {
  const query = qs.stringify({
    populate: "*"
  })
  return axios.put(`/treatment-categories/${id}?${query}`, {
    data: payload
  });
}

export const deleteTreatmentCategory = (id) => {
  return axios.delete(`/treatment-categories/${id}`)
}


