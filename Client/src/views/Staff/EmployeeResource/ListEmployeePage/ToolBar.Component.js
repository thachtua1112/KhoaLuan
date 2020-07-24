import React from "react";

import { Toolbar, Tooltip, IconButton } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import PageviewIcon from "@material-ui/icons/Pageview";

const ToolBar = (props) => {
  return (
    <>
      <Toolbar>
        <Tooltip title="Xem chi tiết hồ sơ">
          <IconButton>
            <PageviewIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cập nhật thông tin">
          <IconButton>
            <CreateIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Xóa hồ sơ">
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </Tooltip>
        <div style={{ float: "right" }}>
          <Tooltip title="Cài đặt hiển thị">
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </>
  );
};
export default ToolBar;
