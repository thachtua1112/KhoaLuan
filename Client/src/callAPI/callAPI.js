import axios from "axios";
import * as config from './config'
export default function callAPI  (endpoint, method = "GET", body)  {
   return axios({
    method: method,
    //url: `${config.REACT_URL_API}${endpoint}`,https://api-hr-manager.herokuapp.com/get-hre-profile
    url: `${config.REACT_URL_API}${endpoint}`,
    data: body,
  },
  {
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      //'access-token': localStorage.getItem("token")
  }
   }).catch((err) => {
    throw err;
  });
};
