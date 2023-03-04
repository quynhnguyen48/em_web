import axios from "../axios";
import qs from "qs"

export const getBlogs = (pagination, filters) => {
  const query = qs.stringify({
    filters,
    populate: "*",
    publicationState: "preview",
    pagination
  });
  return axios.get(`/blogs?${query}`);
};

export const getBlogById = (id) => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.get(`/blogs/${id}?${query}`);
}

export const createBlog = (data) => {
  return axios.post(`/blogs`, {
    data
  });
}

export const updateBlog = (id, data) => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.put(`/blogs/${id}?${query}`, {
    data
  });
}

export const deleteBlog = (id) => {
  return axios.delete(`/blogs/${id}`);
}
