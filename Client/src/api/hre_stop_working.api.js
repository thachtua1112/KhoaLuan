import axiosClient from "./axiosClient.api";

const get = (params) => {
  const url = "/stop-workings";
  return axiosClient.get(url, { params });
};

const create = (data) => {
  const url = "/stop-workings";
  return axiosClient.post(url, data);
};

const update = (CodeEmp, data) => {
  const url = `stop-workings/${CodeEmp}`;
  return axiosClient.put(url, data);
};

const remove = (CodeEmp) => {
  const url = `stop-workings/${CodeEmp}`;
  return axiosClient.delete(url);
};

export default { get, create, update, remove };
