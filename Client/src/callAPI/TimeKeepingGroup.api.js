import callAPI from "./callAPI";

const getDataTimeKeepingGroup = (body = null) => {
  return callAPI(`/timekeeping-group`, "GET", body);
};


const calculateTimeKeepingGroup = (body = null) => {
    return callAPI(`/timekeeping-group/calculate`, "POST", body);
  };

export default { getDataTimeKeepingGroup,calculateTimeKeepingGroup };
