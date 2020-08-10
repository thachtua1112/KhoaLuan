import callAPI from "./callAPI";

const getDataTimeKeeping = (body = null) => {
  return callAPI(`/timekeeping`, "GET", body);
};

const calculateTimeKeeping = (body = null) => {
  return callAPI(`/timekeeping/calculate`, "POST", body);
};

export default { getDataTimeKeeping, calculateTimeKeeping };
