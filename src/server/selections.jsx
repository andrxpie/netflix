import axios from "axios";
import { tokensService } from "./tokens";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/Selections",
});

api.interceptors.request.use(
  (config) => {
    const token = tokensService.getAccessToken();
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const selectionsService = {
  get: function () {
    return api.get("all");
  },
};
