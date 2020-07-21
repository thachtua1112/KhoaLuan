import callAPI from "./callAPI";

export default function getStructureTreeApi(body) {
  return callAPI("/org-structures/trees", "GET", body);
}
/*
export default function getListUnit (body){

}*/
