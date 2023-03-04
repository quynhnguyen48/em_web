import qs from "qs"
import axios from "../axios"

export const getProductCategories = (publicationState = "live") => {
  const query = qs.stringify({
    fields: [],
    populate: "*",
    pagination: {
      pageSize: 1000,
    },
    publicationState,
  })

  return axios.get(`/product-categories?${query}`)
}

export const createProductCategory = (data) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.post(`/product-categories?${query}`, {
    data,
  })
}

export const updateProductCategory = (id, data) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.put(`/product-categories/${id}?${query}`, {
    data,
  })
}

export const deleteProductCategory = (id) => {
  return axios.delete(`/product-categories/${id}`)
}

export const getProductBrands = (publicationState) => {
  const query = qs.stringify({
    fields: [],
    populate: "*",
    pagination: {
      pageSize: 1000,
    },
    publicationState,
  })

  return axios.get(`/brands?${query}`)
}

export const createProductBrand = (data) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.post(`/brands?${query}`, {
    data,
  })
}

export const updateProductBrand = (id, data) => {
  const query = qs.stringify({
    populate: "*",
  })
  return axios.put(`/brands/${id}?${query}`, {
    data,
  })
}

export const deleteProductBrand = (id) => {
  return axios.delete(`/brands/${id}`)
}

export const getListDrugs = (pagination, filters, publicationState = "live") => {
  const query = qs.stringify({
    filters,
    populate: ["brand", "category", "image", "variants", "inventory_histories.variants"],
    pagination,
    publicationState,
    sort: ["code:ASC"],
  })
  return axios.get(`/drugs?${query}`)
}

export const getProductById = (id) => {
  const query = qs.stringify({
    populate: ["brand", "category", "images", "variants", "inventory_histories.variants"],
  })

  return axios.get(`/products/${id}?${query}`)
}

export const createProduct = (data) => {
  return axios.post(`/products`, {
    data,
  })
}

export const updateProduct = (id, data) => {
  const query = qs.stringify({
    populate: ["brand", "category", "images", "variants", "inventory_histories.variants"],
  })

  return axios.put(`/products/${id}?${query}`, {
    data,
  })
}

export const deleteProduct = (id) => {
  return axios.delete(`/products/${id}`)
}

export const addProductInventory = (data) => {
  return axios.post(`/product-inventory-histories`, { data })
}

export const addImportExport = (data) => {
  return axios.post(`/import-export-histories`, { data })
}

export const getImportExportHistory = (filters, pagination) => {
  const query = qs.stringify({
    filters,
    populate: "*",
    pagination,
    sort: ["createdAt:DESC"],
  })

  return axios.get(`/import-export-histories?${query}`)
}
