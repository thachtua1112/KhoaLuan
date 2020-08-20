import callAPI from "./callAPI";

const get = (body) => {
  return callAPI(`/stop-workings`, "GET", body);
};

const create = (body) => {
    return callAPI(`/stop-workings`, "POST", body);
  };

const getByID = (ID) => {
    return callAPI(`/stop-workings/${ID}`, "GET");
};

const update = (ID,body) => {
    return callAPI(`/stop-workings/${ID}`, "POST",body);
};


const deleteX = (ID) => {
    return callAPI(`/stop-workings/${ID}`, "DELETE");
};


export default { get,getByID,update,deleteX,create };
