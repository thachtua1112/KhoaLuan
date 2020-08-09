import callAPI from "./callAPI";

const getProfiles = (body) => {
  return callAPI(`/profiles`, "GET", body);
};

export default { getProfiles };
