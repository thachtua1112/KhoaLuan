import callAPI from "./callAPI";

const GetContractApi = () =>
{
  return callAPI("/hre-contract","GET",null)
}
const Notyet_ContractApi = () =>
{
  return callAPI("/hre-contract/not-yet-contract","GET",null)
}
const  Expire_ContractApi = () =>
{
  return callAPI("/hre-contract/expires","GET",null)
}

export {Notyet_ContractApi,Expire_ContractApi,GetContractApi}
