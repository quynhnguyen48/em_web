import axios from "../axios"

export const getSettings = () => {
  return axios.get("/setting")
}

export const updateSettings = (data) => {
  return axios.put("/setting", {
    data,
  })
}

export const updateDiscountSettings = (data) => {
  return axios.put("/discount-setting", {
    data,
  })
}

export const getDiscountSettings = () => {
  return axios.get("/discount-setting")
}
