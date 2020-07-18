import callAPI from "./callAPI";

export const login = (body) => {
  return callAPI("/login", "POST", body);
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
