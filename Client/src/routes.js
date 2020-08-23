import React from 'react';
import staffRoute from "./views/Staff/routes";

import TimeKeepingRoute from "./views/TimeKeeping/routes";
import SalaryRoute from "./views/Salary/routes";

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes =
[...staffRoute,
 ...TimeKeepingRoute,
 ...SalaryRoute,
  { path: "/dashboard", exact: true, name: "Home",component: Dashboard },
  { path: "/", exact: true, name: "Home",component: Dashboard },

];

export default routes;
