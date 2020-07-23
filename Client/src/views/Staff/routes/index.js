import React from "react";
const NewContractPage = React.lazy(() => import("../ContractPage/NewContractPage"));
const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));
const NotYet_ContractPage = React.lazy(() => import("../ContractPage/NotYet_ContractPage"));
const DetailsStaffPage = React.lazy(() => import("../Staff_DetailsPage"));
const ContractPage = React.lazy(() => import("../ContractPage/Dashboard_ContractPage"));


const staffRoute = [
  {
    path: "/nhan-su",
    name: "Nhân sự",
    exact: true,
    component: OrgStructurePage,
  },
  {
    path: "/nhan-su/to-chuc-nhan-su",
    name: "Tổ chức nhân sự",
    component: OrgStructurePage,
  },

  {
    path: "/nhan-su/ho-so-nhan-vien",
    name: "Hồ sơ nhân viên",
    component: OrgStructurePage,
  },

  {
    path: "/nhan-su/chi-tiet-nhan-vien/:ID",
    name: "Chi tiết nhân viên",
    component: DetailsStaffPage,
  },
  //Hợp đồng
  {
    path: "/nhan-su/hop-dong",
    exact: true,
    name: "Hợp đồng",
    component: NotYet_ContractPage,
  },
  {
    path: "/nhan-su/hop-dong/ds-chua-co-hop-dong",
    name: "ds chưa có hợp đồng",
    component: NotYet_ContractPage,
  },
  {
    path: "/nhan-su/hop-dong/tao-moi-hop-dong",
    name: "Tạo mới hợp đồng",
    component: NewContractPage,
  } ,
  {
    path: "/nhan-su/hop-dong/ds-hop-dong",
    name: "Tạo mới hợp đồng",
    component: ContractPage,
  }
];

export default staffRoute;
