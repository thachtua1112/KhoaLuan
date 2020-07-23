import callAPI from "./callAPI";

const getProfiles = (body) => {
  return callAPI(`/profiles`, "GET", null);
};

const getProfilesWithFilter = (body) => {
  return callAPI(`/profiles`, "GET", null);
};

export default { getProfiles, getProfilesWithFilter };
