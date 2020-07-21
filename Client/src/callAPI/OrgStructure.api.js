import callAPI from "./callAPI";

export default function getStructureTreeApi(body) {
  return callAPI("/org-structures/trees", "GET", body);
}

export default function getListUnit (body){

const getListOrg = (OrgStructureID) => {
  return callAPI(
    `/org-structures/${
      !OrgStructureID ? "" : OrgStructureID
    }/trees/orgs`,
    "GET",
    {}
  );
};

const getListProfile = (OrgStructureID) => {
  return callAPI(
    `/org-structures/${
      !OrgStructureID ? "" : OrgStructureID
    }/trees/profiles`,
    "GET",
    {}
  );
};

export default { getListProfile, getStructureTree, getListOrg };
