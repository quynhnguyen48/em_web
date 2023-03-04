import qs from "qs"
import axios from "../axios"

export const getListCards = (pagination, filters) => {
  const query = qs.stringify({
    filters,
    populate: ["user", "staff", "extraMembers", "extraMembers.member", "transactions", "service"],
    sort: ["createdAt:DESC"],
    pagination,
  })

  return axios.get(`/membership-cards?${query}`)
}

export const getCardById = (id) => {
  const query = qs.stringify({
    populate: "*",
  })

  return axios.get(`/membership-cards/${id}?${query}`)
}

export const createNewCard = (payload) => {
  return axios.post(`/membership-cards`, {
    data: payload,
  })
}

export const updateCard = (id, payload) => {
  return axios.put(`/membership-cards/${id}`, {
    data: payload,
  })
}

export const deleteCard = (id, payload) => {
  return axios.delete(`/membership-cards/${id}`)
}

export const getServiceCardAnalytics = () => {
  return axios.get(`/service-card/analytics`)
}

export const getExtraMembers = (carId) => {
  return axios.get(`/card/${carId}/extra-members`)
}
