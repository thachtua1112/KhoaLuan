import React from "react";

const OrgStructurePage = React.lazy(() => import("../OrgStructurePage"));

const staffRoute = [
  {
    path: "/nhan-su/",
    name: "Nhân sự",
    component: OrgStructurePage,
    exact: true,
  },
  {
    path: "/nhan-su/to-chuc-nhan-su",
    name: "Tổ chức nhân sự",
    component: OrgStructurePage,
  },
];

export default staffRoute;
