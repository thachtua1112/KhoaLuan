import axios from "axios";

export default (endpoint, method = "GET", body) => {
  console.log("apicall")
  return axios({
    method: method,
    url: `localhost:8797${endpoint}`,
    data: body,
  },
  {
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  }
   }).catch((err) => {
    throw err;
  });
};
