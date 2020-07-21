import callAPI from "./callAPI";

const getStructureTree = (body) => {
  return callAPI("/api/v1/org-structures/trees", "GET", body);
};

const getListOrg = (OrgStructureID) => {
  return callAPI(
    `/api/v1/org-structures/${
      !OrgStructureID ? "" : OrgStructureID
    }/trees/orgs`,
    "GET",
    {}
  );
};

const getListProfile = (OrgStructureID) => {
  return callAPI(
    `/api/v1/org-structures/${
      !OrgStructureID ? "" : OrgStructureID
    }/trees/profiles`,
    "GET",
    {}
  );
};

export default { getListProfile, getStructureTree, getListOrg };
