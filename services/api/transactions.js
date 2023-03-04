import qs from "qs"
import axios from "../axios"

export const getListTransactions = (pagination, filters, populate = "*") => {
  const query = qs.stringify({
    filters,
    populate,
    sort: ["createdAt:DESC"],
    pagination,
    publicationState: "preview",
  })

  return axios.get(`/transactions?${query}`)
}

export const getTransactionById = (id) => {
  return axios.get(`/transactions/${id}`, {
    params: {
      populate: "*",
    },
  })
}

export const createNewTransaction = (payload) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.post(`/transactions?${query}`, {
    data: payload,
  })
}

export const updateTransaction = (id, payload) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.put(`/transactions/${id}?${query}`, {
    data: payload,
  })
}

export const deleteTransaction = (id) => {
  return axios.delete(`/transactions/${id}`)
}

export const getTotalRevenue = () => {
  return axios.get(`/transaction/total-revenue`)
}

export const getTotalDebt = () => {
  return axios.get(`/transaction/total-debt`)
}

export const getTopDebt = () => {
  return axios.get(`/transaction/top-debt`)
}

export const getDebtDistribution = () => {
  return axios.get(`/transaction/debt-distribution`)
}

export const getTransactionAnalyticsByUser = (payload) => {
  return axios.post(`/transaction/user-analytics`, payload)
}

export const getUserDebt = (payload) => {
  return axios.post(`/transaction/user-debt`, payload)
}

export const getMonthlyRevenue = (payload) => {
  return axios.post(`/transaction/monthly-revenue`, payload)
}

export const getYearlyRevenue = (payload) => {
  return axios.post(`/transaction/yearly-revenue`, payload)
}

export const getCustomerAnalytics = (payload) => {
  return axios.post(`/customer-analytics`, payload)
}

export const getStaffAnalytics = (payload) => {
  return axios.get(`/staff-analytics`, payload)
}

export const getProductAnalytics = (payload) => {
  return axios.post(`/product-analytics`, payload)
}

export const getTransactionsByUserId = (userId, filters) => {
  const query = qs.stringify({
    filters: {
      user: {
        id: {
          $eq: userId,
        },
      },
      ...filters,
    },
    populate: "*",
    sort: ["createdAt:DESC"],
    publicationState: "preview",
  })

  return axios.get(`/transactions?${query}`)
}

export const getSuggestionServices = (userId) => {
  return axios.post(`/suggestion-services`, { userId })
}
