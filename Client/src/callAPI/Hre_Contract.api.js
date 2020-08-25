import callAPI from "./callAPI";

const GetContractApi = (body=null) =>
{
  return callAPI("/hre-contract","GET",body)
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
const GetHistoryContractApi = (body) =>
{
  return callAPI(`/hre-contract/history/${body}`,"GET",null)
}
const CreateContractApi = (body) =>
{
  return callAPI("/hre-contract","POST",body)
}
export {CreateContractApi,Notyet_ContractApi,Expire_ContractApi,GetContractApi,ListContractApi,GetHistoryContractApi}
