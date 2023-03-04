import axios from "../axios"
import qs from "qs"

export const getBlogCategories = (publicationState = 'live') => {
  const query = qs.stringify({
    populate: "*",
    publicationState
  });
  return axios.get(`/blog-categories?${query}`);
};

export const createBlogCategory = (data) => {
  return axios.post(`/blog-categories`, {
    data
  });
}

export const updateBlogCategory = (id, data) => {
  return axios.put(`/blog-categories/${id}`, {
    data
  });
}

export const deleteBlogCategory = (id) => {
  return axios.delete(`/blog-categories/${id}`);
}
