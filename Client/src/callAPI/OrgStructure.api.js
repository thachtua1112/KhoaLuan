import callAPI from "./callAPI";

export default function getStructureTreeApi(body) {
  return callAPI("/api/v1/org-structures/trees", "GET", body);
}
/*
export default function getListUnit (body){

}*/
