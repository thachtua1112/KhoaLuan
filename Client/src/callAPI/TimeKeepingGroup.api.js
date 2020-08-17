import callAPI from "./callAPI";

const getDataTimeKeepingGroup = (body = null) => {
  return callAPI(`/timekeeping-groups`, "GET", body);
};


const calculateTimeKeepingGroup = (body = null) => {
    return callAPI(`/timekeeping-groups/synthesis`, "POST", body);
  };

export default { getDataTimeKeepingGroup,calculateTimeKeepingGroup };
