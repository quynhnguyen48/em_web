import { USER_ROLE } from "constants/Authentication"
import qs from "qs"
import axios from "../axios"

export const getMe = () => {
  return axios.get("/users/me?populate=*")
}

export const getListPatients = (pagination, filters = {}, populate) => {
  const query = qs.stringify({
    filters: {
      ...filters,
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

  return axios.get(`/patients?pagination[pageSize]=1000&&${query}`)
}

export const getPatientById = (id) => {
  const query = qs.stringify({
    populate: ["role", "referral", "check_ins"],
  })

  return axios.get(`/patients/${id}?${query}`)
}

export const updatePatient = (id, payload) => {
  return axios.put(`/patients/${id}`, payload)
}

export const createNewPatient = (payload) => {
  return axios.post("/patients", payload)
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
