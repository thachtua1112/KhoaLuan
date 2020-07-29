import callAPI from "./callAPI";


function Notyet_ContractApi()
{
  return callAPI("/hre-contract/not-yet-contract","GET",null)
}

export {Notyet_ContractApi}
