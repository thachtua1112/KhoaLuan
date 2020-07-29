import React from "react";

import { useHistory } from "react-router-dom";

import { Toolbar, Tooltip, IconButton, Button } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
//mport PageviewIcon from "@material-ui/icons/Pageview";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SearchIcon from "@material-ui/icons/Search";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const ToolBar = (props) => {
  const history = useHistory();

  const { RowsSelected } = props;

  const goDetail = () => {
    console.log(RowsSelected);
    //history.push(`/nhan-su/chi-tiet-nhan-vien/${RowsSelected.CodeEmp}`);
  };

  return (
    <>
      <Toolbar>
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Tìm kiếm
        </Button>
        <div style={{ marginLeft: "20px" }}>
          <Tooltip title="Xem chi tiết hồ sơ">
            <IconButton onClick={goDetail}>
              <FindInPageIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Thêm hồ sơ">
            <IconButton>
              <NoteAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Thêm nhân viên mới">
            <IconButton>
              <PersonAddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cập nhật thông tin">
            <IconButton>
              <CreateIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Phê duyệt">
            <IconButton>
              <HowToRegIcon />
            </IconButton>
          </Tooltip>

          {
            <Tooltip title="Xóa hồ sơ">
              <IconButton>
                <DeleteOutlineIcon />
              </IconButton>
            </Tooltip>
          }
        </div>

        <Tooltip title="Cài đặt hiển thị">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </>
  );
};
export default ToolBar;
