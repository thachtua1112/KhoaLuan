import callAPI from "./callAPI";

function GetHre_Profie_Api(body)
{
  return callAPI(`/profiles/${body}`,"GET",null)
}
export {GetHre_Profie_Api}
/*
module.exports.GetHre_Profie_Api = function(body){
  return callAPI("/profiles","GET",body)
}
*/
