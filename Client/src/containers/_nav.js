export default [
  {
    _tag: "CSidebarNavItem",
    name: "Bảng Quản lý",
    to: "/dashboard",
    icon: "cil-speedometer",
    badge: {
      color: "info",
      text: "HR",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["NHÂN SỰ"],
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tổ chức nhân sự",
    to: "/nhan-su/to-chuc-nhan-su",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tiếp nhận nhân viên mới",
    to: "/nhan-su/tiep-nhan-nhan-vien-moi",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Nhân viên đang làm việc",
    to: "/nhan-su/tiep-nhan-nhan-vien-moi",
    icon: "cil-pencil",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Thêm nhân viên mới",
        to: "/nhan-su/tiep-nhan-nhan-vien-moi/them-nhan-vien-moi",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách nhân viên mới",
        to: "/nhan-su/tiep-nhan-nhan-vien-moi/danh-sach-nhan-vien-moi",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Dữ liệu nhân viên",
    to: "/nhan-su/du-lieu-nhan-vien",
    icon: "cil-pencil",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Nhân viên nghỉ việc",
        to: "/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhân viên đến tuổi nghỉ hưu",
        to: "/nhan-su/du-lieu-nhan-vien/nhan-vien-huu",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách trình độ chuyên môn",
        to: "/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Hợp đồng",
    to: "/nhan-su/hop-dong",
    icon: "cil-pencil",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách hợp đồng",
        to: "/nhan-su/hop-dong/danh-sach-hop-dong",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách nhân viên chưa có hợp đồng",
        to: "/nhan-su/hop-dong/danh-sach-chua-co-hop-dong",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách hợp đồng hết hạn",
        to: "/nhan-su/hop-dong/danh-sach-hop-dong-het-han",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Base",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Tables",
        to: "/base/tables",
      },
    ],
  },

  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
];
