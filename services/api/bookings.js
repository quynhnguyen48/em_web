import qs from "qs";
import dayjs from "dayjs";

import axios from "../axios";
import { NEW_RANGES } from "constants/Dashboard";

export const getListBookings = (pagination, filters) => {
  const query = qs.stringify({
    filters,
    populate: "*",
    pagination,
    sort: ["createdAt:DESC"],
  });

  return axios.get(`/bookings?${query}`);
};

export const createBooking = (data) => {
  return axios.post("/bookings", {
    data,
  });
};

export const createBookingWithPatient = (data) => {
  return axios.post("/bookings/createBooking", {
    data,
  }); 
}

export const updateBookingWithPatient = (data) => {
  return axios.post("/bookings/updateBooking", {
    data,
  }); 
}

export const updateBooking = (id, data) => {
  return axios.put(`/bookings/${id}`, { data });
};

export const deleteBooking = (id) => {
  return axios.delete(`/bookings/${id}`);
};

export const getBookingById = (id) => {
  return axios.get(`/bookings/${id}`, {
    params: {
      populate: [
        "medical_record",
        "medical_record.doctor_in_charge",
        "patient"
      ],
    },
  });
};

export const updateStatusBooking = (id, status) => {
  return axios.post(`/bookings/updateStatusBooking`, {
    id,
    status,
  });
}

export const countNewBookings = () => {
  return axios.post(`/bookings/count`, {
    query: {
      bookingDate: {
        $gte: dayjs().subtract(NEW_RANGES, "days").startOf("day").toISOString(),
      },
    },
  });
};

export const getBookingsByUserId = (customerId) => {
  const query = qs.stringify({
    filters: {
      user: {
        id: {
          $eq: customerId
        }
      }
    },
    populate: "*",
    sort: ["createdAt:DESC"],
  });

  return axios.get(`/bookings?${query}`);
};
