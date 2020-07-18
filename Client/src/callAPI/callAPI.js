import axios from "axios";

export default (endpoint, method = "GET", body) => {
  return axios({
    method: method,
    url: `${process.env.API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    throw err;
  });
};
