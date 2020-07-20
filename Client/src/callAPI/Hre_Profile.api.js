import callAPI from "./callAPI";

export function GetHre_Profie_Api(body)
{
  return callAPI("/profiles","GET",body)
}
