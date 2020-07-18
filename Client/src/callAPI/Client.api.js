import axios from "axios";

import queryString from "query-string";

const clientAPI = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

clientAPI.interceptors.request.use(async (config) => {
  return config;
});

clientAPI.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);

export default clientAPI;
