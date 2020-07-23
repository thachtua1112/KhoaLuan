import React from "react";
import DetailsStaffPage from "../Staff_DetailsPage";
import NotYet_ContractPage from "../ContractPage/NotYet_ContractPage";
import NewContractPage from "../ContractPage/NewContractPage";

const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));

const ListEmployeePage = React.lazy(() =>
  import("../EmployeeResource/ListEmployeePage")
);

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
  }
];

export default staffRoute;
