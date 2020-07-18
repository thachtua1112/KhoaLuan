import React from "react";

import staffRoute from "./views/Staff/routes";

const Tables = React.lazy(() => import("./views/base/tables/Tables"));

//const Cards = React.lazy(() => import("./views/base/cards/Cards"));

//const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  ...staffRoute,
  { path: "/", exact: true, name: "Home" },

  //{ path: "/dashboard", name: "Dashboard", component: Dashboard },

  //{ path: "/base", name: "Base", component: Cards, exact: true },

  { path: "/base/tables", name: "Tables", component: Tables },
];

export default routes;
