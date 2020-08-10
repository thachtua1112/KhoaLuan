import callAPI from "./callAPI";

const GetIdProfileQualificationApi= (body) =>
{
  return callAPI(`/profile-qualification/${body}`,"GET",null)
}
export {GetIdProfileQualificationApi}
