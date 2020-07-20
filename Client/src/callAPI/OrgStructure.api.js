import callAPI from "./callAPI";

export default function getStructureTreeApi (body){
  return callAPI("/structure-tree", "GET", body)
}
/*
export default function getListUnit (body){

}*/
