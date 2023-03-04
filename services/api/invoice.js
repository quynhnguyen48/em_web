import qs from "qs"
import axios from "../axios"

const populate = [
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
  "patient",
  "booking",
  "booking.patient",
  "booking.medical_record",
  "prescription",
]

export const getInvoices = (pagination, filters = {}) => {
  const query = qs.stringify({
    filters,
    populate,
    publicationState: "preview",
    pagination,
    sort: ["createdAt:DESC"],
  })
  return axios.get(`/invoices?${query}`)
}

export const updateInvoiceById = (id, data) => {
  const query = qs.stringify({
    populate,
  })

  return axios.put(`/invoices/${id}?${query}`, { data })
}

export const updateAndDownloadInvoiceById = (id, data, header) => {
  return axios.put(`/invoice/updateAndDownloadInvoice/${id}`, { data }, header)
}

export const getMedicalRecordById = (id) => {
  const query = qs.stringify({
    populate,
  })

  return axios.get(`/medical-records/${id}?${query}`)
}

export const createNewTreatment = (payload) => {
  // const query = qs.stringify({
  //   populate: "*",
  // })
  return axios.post(`/medical-records`, {
    data: payload,
  })
}

export const updateTreatment = (id, payload) => {
  return axios.put(`/medical-records/${id}`, {
    data: payload,
  })
}
