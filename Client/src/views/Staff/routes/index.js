import React from "react";
import DetailsStaffPage from "../Staff_DetailsPage";

const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));

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
    path: "/nhan-su/chi-tiet-nhan-vien",
    name: "Chi tiết nhân viên",
    component: DetailsStaffPage,
  }
];

export default staffRoute;
