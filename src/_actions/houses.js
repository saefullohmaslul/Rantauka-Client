import axios from "axios";
import { BASE_URL } from "../api/explore";

export const getHouses = () => {
  return {
    type: "GET_HOUSES",
    payload: axios.get(`${BASE_URL}/api/v1/houses`)
  };
};
