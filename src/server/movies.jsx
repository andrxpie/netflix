import axios from "axios";
import { tokensService } from "./tokens";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/Movies",
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

export const moviesService = {
  get: function () {
    return api.get("all");
  },
  getById: function (id) {
    return api.get(`${id}`);
  },
  getBySelectionId: function (id) {
    return api.get(`selection-${id}`);
  },
  create: function (model) {
    const formData = new FormData();

    for (const key in model) {
      if (model[key] == null) continue;
      formData.append(key, model[key]);
    }

    return api.post("", formData);
  },
  delete: function (id) {
    return api.delete(`${id}`);
  },
  edit: function (model) {
    return api.put("", model);
  },
};
