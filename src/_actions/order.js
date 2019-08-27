import axios from "axios";
import { BASE_URL } from "../api/explore";

export const getOrders = token => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return {
    type: "GET_ORDERS",
    payload: axios.get(`${BASE_URL}/api/v1/bookings`, config)
  };
};
