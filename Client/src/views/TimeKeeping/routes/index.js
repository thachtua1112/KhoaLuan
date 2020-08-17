
import CalculateKeepingPage from "../CalculateKeepingPage";
import TimeKeepingDayPage from "../TimeKeepingDayPage";
import TimeKeepingGroupPage from "../TimeKeepingGroupPage";


const TimeKeepingRoute = [
  {
    path: "/cham-cong",
    name: "Chấm công",
    exact: true,
    component: CalculateKeepingPage,
  },
  {
    path: "/cham-cong/tong-hop-cong",
    name: "Tổng hợp công",
    exact: true,
    component: CalculateKeepingPage,
  },
  {
    path: "/cham-cong/du-lieu-ngay-cong",
    name: "Dữ liệu ngày công",
    exact: true,
    component: TimeKeepingDayPage,
  },
  {
    path: "/cham-cong/du-lieu-tong-hop-cong",
    name: "Dữ liệu tổng hợp công",
    exact: true,
    component: TimeKeepingGroupPage,
  },
];

export default TimeKeepingRoute;
