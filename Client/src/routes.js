import staffRoute from "./views/Staff/routes";

const routes = [...staffRoute, { path: "/", exact: true, name: "Home" }];

export default routes;
