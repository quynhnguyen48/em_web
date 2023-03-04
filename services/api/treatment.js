import qs from "qs"
import axios from "../axios"

export const getTreatments = (pagination, filters = {}) => {
  const query = qs.stringify({
    filters,
    populate: [
      "title",
      "background",
      "thumbnail",
      "areaImage",
      "bookings",
      "categories.title",
      "transactions",
      "treatmentHistories",
      "timeSession",
      "highlight",
      "highlight.icon",
      "procedure",
      "procedure.image",
      "results.title",
      "results.images",
    ],
    publicationState: "preview",
    pagination,
    sort: ["createdAt:DESC"],
  })
  return axios.get(`/treatments?${query}`)
}

export const getTreatmentById = (id) => {
  const query = qs.stringify({
    populate: [
      "title",
      "background",
      "thumbnail",
      "areaImage",
      "treatmentAreaDescription",
      "bookings",
      "categories.title",
      "transactions",
      "treatmentHistories",
      "timeSession",
      "highlight",
      "highlight.icon",
      "procedure",
      "procedure.image",
      "results.title",
      "results.images",
    ],
  })

  return axios.get(`/treatments/${id}?${query}`)
}

export const createNewTreatment = (payload) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.post(`/medical-records?${query}`, {
    data: payload,
  })
}

export const updateTreatment = (id, payload) => {
  return axios.put(`/treatments/${id}`, {
    data: payload,
  })
}
