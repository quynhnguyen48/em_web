import qs from "qs"

import axios from "../axios"

export const createPrescription = (data) => {
  return axios.post("/prescriptions", {
    data,
  })
}

export const getPrescriptionById = (id) => {
  return axios.get(`/prescriptions/${id}`, {
    params: {
      populate: ["Drugs", "Drugs.drug", "additional_drugs", "additional_drugs.drug", "medicalRecord"],
    },
  })
}

export const updatePrescription = (id, data) => {
  return axios.put(`/prescriptions/${id}`, { data })
}
