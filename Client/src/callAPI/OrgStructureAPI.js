import callAPI from "./callAPI";

const OrgStructureAPI = {
  getOrgStructureTree: async (body) => {
    return await callAPI("/api/v1/org-structures/tree", "GET", body);
  },
};

export default OrgStructureAPI;
