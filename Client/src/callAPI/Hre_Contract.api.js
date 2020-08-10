import callAPI from "./callAPI";

const GetContractApi = () =>
{
  return callAPI("/hre-contract","GET",null)
}
const Notyet_ContractApi = () =>
{
  return callAPI("/hre-contract/not-yet-contract","GET",null)
}
const  ListContractApi = () =>
{
  return callAPI("/hre-contract/contract","GET",null)
}
const  Expire_ContractApi = () =>
{
  return callAPI("/hre-contract/expires","GET",null)
}
const CreateContractApi = (body) =>
{
  return callAPI("/hre-contract","POST",body)
}
export {CreateContractApi,Notyet_ContractApi,Expire_ContractApi,GetContractApi,ListContractApi}
