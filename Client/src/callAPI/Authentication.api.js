/*import callAPI from "./callAPI";

export const login = (body) => {
  return callAPI("/user/login", "POST", body);
};
*/import axios from "axios";

export default (endpoint, method = "GET", body) => {
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
// HAHA class AuthenticationAPI {
//   login = (params) => {
//     const url = "/login";
//     return clientAPI.post(url, params);
//   };

//   logout = (params) => {
//     const url = "/logout";
//     return clientAPI.get(url, params);
//   };

//   checkLogin = (params) => {
//     const url = "/check-login";
//     return clientAPI.get(url, params);
//   };
// }

// const authenticationAPI = new AuthenticationAPI();

// export default authenticationAPI;
