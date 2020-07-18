import clientAPI from "./Client.api";

export const getStructureTree = (params) => {
  const url = "/org-structure";
  return clientAPI.get(url, params);
};

export const getListUnit = (params) => {
  const url = "/list-unit";
  return clientAPI.get(url, params);
};
