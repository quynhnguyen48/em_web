import qs from "qs";
import axios from "../axios";

export const getBanner = () => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.get(`/banner?${query}`);
};

export const updateBanner = (data) => {
  return axios.put("/banner", {
    data,
  });
}

export const getPrivacyContent = () => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.get(`/privacy?${query}`);
};

export const updatePrivacyContent = (data) => {
  return axios.put("/privacy", {
    data
  });
}

export const getTermsContent = () => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.get(`/term?${query}`);
};

export const updateTermsContent = (data) => {
  return axios.put("/term", {
    data
  });
}

export const getAboutContent = () => {
  const query = qs.stringify({
    populate: "*",
  });
  return axios.get(`/about?${query}`);
};

export const updateAboutContent = (data) => {
  return axios.put("/about", {
    data
  });
}

export const getFAQs = () => {
  const query = qs.stringify({
    populate: ["list.answer", "list.question"],
  });
  return axios.get(`/faq?${query}`);
}

export const updateFAQs = (data) => {
  return axios.put(`/faq`, {
    data
  });
}
