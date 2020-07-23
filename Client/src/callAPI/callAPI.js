import axios from "axios";
//import * as config from './config'
export default function callAPI  (endpoint, method = "GET", body)  {
   return axios({
    method: method,
    //url: `${config.REACT_URL_API}${endpoint}`,https://api-hr-manager.herokuapp.com/get-hre-profile
    url: `https://api-hr-manager.herokuapp.com${endpoint}`,
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
