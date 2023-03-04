import dayjs from "dayjs"
import qs from "qs"
import axios from "../axios"

export const getListCheckinToday = (filters) => {
  const query = qs.stringify({
    filters: {
      ...filters,
      checkedoutAt: {
        $null: true,
      },
      createdAt: {
        $gte: dayjs().startOf("day").toISOString(),
      },
    },
    sort: ["createdAt:DESC"],
    populate: [
      "user",
      "transactions",
      "transactions.staff",
      "transactions.extraStaff",
      "transactions.treatment",
      "transactions.order",
      "transactions.card",
    ],
    pagination: {
      pageSize: 1000,
    },
  })

  return axios.get(`/check-ins?${query}`)
}

export const getListCheckoutToday = (filters) => {
  const query = qs.stringify({
    filters: {
      ...filters,
      checkedoutAt: {
        $notNull: true,
      },
      createdAt: {
        $gte: dayjs().startOf("day").toISOString(),
      },
    },
    sort: ["checkedoutAt:DESC"],
    populate: "*",
    pagination: {
      pageSize: 1000,
    },
  })

  return axios.get(`/check-ins?${query}`)
}

export const createNewCheckin = (payload = {}) => {
  return axios.post(`/check-ins`, { data: payload })
}

export const updateCheckin = (id, payload) => {
  const query = qs.stringify({
    populate: [
      "user",
      "transactions",
      "transactions.treatment",
      "products",
      "order",
      "staff",
      "extraStaff",
      "card",
    ],
  })
  return axios.put(`/check-ins/${id}?${query}`, { data: payload })
}

export const updateAliasID = (payload) => {
  return axios.post("/check-in/person/updateAliasID", payload)
}
