import { USER_ROLE } from "../../constants/Authentication"
import qs from "qs"
import axios from "../axios"

export const getMe = () => {
  return axios.get("/user/getMe?populate=*")
}

export const getListUsers = (pagination, filters = {}, populate) => {
  const query = qs.stringify({
    filters: {
      ...filters,
      role: {
        type: {
          $eq: USER_ROLE.AUTHENTICATED,
        },
      },
    },
    populate: populate || [
      // "role",
      // "transactions",
      // "bookings",
      // "treatment_histories",
      // "orders",
      // "referral",
      // "treatment_histories.treatment",
    ],
    pagination,
    sort: ["createdAt:DESC"],
  })

  return axios.get(`/users?${query}`)
}

export const getListUsersByRole = (populate, role) => {
  const query = qs.stringify({
    filters: {
      role: {
        type: {
          $eq: USER_ROLE.AUTHENTICATED,
        },
      },
    },
    populate,
    sort: ["createdAt:DESC"],
  })

  return axios.get(`/users?${query}`)
}

export const getUserById = (id) => {
  const query = qs.stringify({
    populate: ["role", "referral", "check_ins"],
  })

  return axios.get(`/users/${id}?${query}`)
}

export const updateUser = (id, payload) => {
  return axios.put(`/users/${id}`, payload)
}

export const createNewUser = (payload) => {
  return axios.post("/auth/local/register", payload)
}

export const login = (payload) => {
  return axios.post("/auth/local", payload)
}

export const forgotPassword = (payload) => {
  return axios.post("/user/forgot-password", payload)
}

export const resetPassword = (payload) => {
  return axios.post("/user/reset-password", payload)
}

export const getReferralByUserId = (userId) => {
  const query = qs.stringify({
    filters: {
      referral: {
        id: {
          $eq: userId,
        },
      },
    },
    sort: ["createdAt:DESC"],
  })

  return axios.get(`/users?${query}`)
}

export const createDebtColectionReminder = (data) => {
  return axios.post(`/debt-collection-reminders`, { data })
}
