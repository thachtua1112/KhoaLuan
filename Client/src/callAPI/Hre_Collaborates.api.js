import callAPI from "./callAPI";

export const HreCollaboratesApi =(body)=>{
  return callAPI(`/hre-collaborates`,"GET",body)

}
export const CreateHreCollaboratesApi =(body)=>{
  return callAPI(`/hre-collaborates`,"POST",body)
}
export const SelectStaffCollaborateApi =()=>{
  return callAPI(`/hre-collaborates/select-staff`,"GET",null)
}
/*
export const THreProfie_Api =(body)=>{
  return callAPI('/t-profiles',"GET",body)

}*/
