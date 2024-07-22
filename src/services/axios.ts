import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.itbook.store/1.0",
  headers: {
    'Content-Type': 'application/json',
  },
});