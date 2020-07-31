//import React from "react";

import NewContractPage from "../ContractPage/NewContractPage";
import OrgStructurePage from "../OrgStructurePage";
import DetailsStaffPage from "../ContractPage/Dashboard_ContractPage";
import ListEmployeePage from "../EmployeeResource/ListEmployeePage";
import NotYet_ContractPage from "../ContractPage/NotYet_ContractPage";
import ContractPage from "../ContractPage/Dashboard_ContractPage";

import TimeKeepingPage from "../TimeKeeping/TimeKeepingPage";

/*
const NewContractPage = React.lazy(() =>
  import("../ContractPage/NewContractPage")
);
const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));
const NotYet_ContractPage = React.lazy(() =>
  import("../ContractPage/NotYet_ContractPage")
);
const DetailsStaffPage = React.lazy(() => import("../Staff_DetailsPage"));
const ContractPage = React.lazy(() =>
  import("../ContractPage/Dashboard_ContractPage")
);

const ListEmployeePage = React.lazy(() =>
  import("../EmployeeResource/ListEmployeePage")
);
*/
const staffRoute = [
  {
    path: "/nhan-su",
    name: "Nhân sự",
    exact: true,
    component: OrgStructurePage,
  },
  {
    path: "/nhan-su/to-chuc-phong-ban",
    name: "Tổ chức phòng ban",
    component: OrgStructurePage,
    exact: true,
  },
  {
    path: "/nhan-su/du-lieu-nhan-vien",
    name: "Dữ liệu nhân viên",
    component: ListEmployeePage,
    exact: true,
  },
  {
    path: "/nhan-su/du-lieu-nhan-vien/danh-sach-nhan-vien",
    name: "Danh sách tất cả nhân viên",
    component: ListEmployeePage,
    exact: true,
  },

  {
    path: "/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec",
    name: "Nhân viên nghỉ viec",
    component: ListEmployeePage,
    exact: true,
  },
  {
    path: "/nhan-su/du-lieu-nhan-vien/nhan-vien-huu",
    name: "Nhân viên đến tuổi nghỉ hưu",
    component: ListEmployeePage,
    exact: true,
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
    component: ContractPage,
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
  },
  {
    path: "/nhan-su/hop-dong/tao-moi-hop-dong/:ID",
    name: "Tạo mới hợp đồng",
    component: NewContractPage,
  },
  {
    path: "/nhan-su/hop-dong/ds-hop-dong",
    name: "Danh sách hợp đồng",
    component: ContractPage,
  },

  ///
  {
    path: "/cham-cong",
    name: "Chấm công",
    exact: true,
    component: TimeKeepingPage,
  },
  {
    path: "/cham-cong/du-lieu-ngay-cong",
    name: "Dữ liệu ngày công",
    exact: true,
    component: TimeKeepingPage,
  },
  {
    path: "/cham-cong/du-lieu-tong-hop-cong",
    name: "Dữ liệu tổng hợp công",
    exact: true,
    component: TimeKeepingPage,
  },
];

export default staffRoute;
