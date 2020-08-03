import callAPI from "./callAPI";

const CreateNewStaffApi = (body) => {
  return callAPI('/new-staff/create-files', "POST", body);
};
export default { CreateNewStaffApi };
