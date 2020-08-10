import callAPI from "./callAPI";

const GetNewStaffApi = (body) =>{
  return callAPI(`/new-staff`, "GET", body);
}
const CreateNewStaffApi = (body) => {
  return callAPI('/new-staff/create-files', "POST", body);
};
export { CreateNewStaffApi,GetNewStaffApi };
