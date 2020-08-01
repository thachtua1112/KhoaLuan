import callAPI from "./callAPI";

function GetHre_Profie_Api(body)
{
  return callAPI(`/profiles/${body}`,"GET",null)
}

function Notyet_ContractApi()
{
  return callAPI("/hre-contract/not-yet-contract","GET",null)
}
const UpDateProfileApi = (id,body)=>{
  return callAPI(`/profiles/${id}`,"PUT",body)
}
export {GetHre_Profie_Api,Notyet_ContractApi,UpDateProfileApi}
/*
module.exports.GetHre_Profie_Api = function(body){
  return callAPI("/profiles","GET",body)
}
*/
