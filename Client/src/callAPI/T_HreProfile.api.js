import callAPI from "./callAPI";

function THre_Profie_Api(body)
{
  return callAPI(`/t-profiles/${body}`,"GET",null)
}

export {THre_Profie_Api}
/*
module.exports.GetHre_Profie_Api = function(body){
  return callAPI("/profiles","GET",body)
}
*/
