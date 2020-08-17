import callAPI from "./callAPI";

const getDataTimeKeeping = (body = null) => {
  return callAPI(`/timekeeping-days`, "GET", body);
};

const importDataTimeKeeping = (body = null) => {
  return callAPI(`/timekeeping-days/import`, "POST", body);
};

const calculateTimeKeeping = (body = null) => {
  return callAPI(`/timekeeping-days/calculate`, "POST", body);
};

export default { getDataTimeKeeping, calculateTimeKeeping ,importDataTimeKeeping};
