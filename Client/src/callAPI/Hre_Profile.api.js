import callAPI from "./callAPI";

function GetHre_Profie_Api(body)
{
  return callAPI(`/profiles/${body}`,"GET",null)
}

function Notyet_ContractApi()
{
  return callAPI("/hre-contract/not-yet-contract","GET",null)
}

export {GetHre_Profie_Api,Notyet_ContractApi}
/*
module.exports.GetHre_Profie_Api = function(body){
  return callAPI("/profiles","GET",body)
}
*/
