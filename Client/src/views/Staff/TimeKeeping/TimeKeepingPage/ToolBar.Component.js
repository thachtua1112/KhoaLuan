import React from "react";

import { useHistory } from "react-router-dom";

import { Toolbar, Tooltip, IconButton, Button } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ExposureIcon from "@material-ui/icons/Exposure";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  action: {
    flexGrow: 1,
  },
}));

const ToolBar = (props) => {
  const classes = useStyles();

  //const history = useHistory();

  const { RowsSelected } = props;

  return (
    <>
      <Toolbar className={classes.root}>
        <div className={classes.action}>
          <Button variant="outlined" startIcon={<SearchIcon />}>
            Tìm kiếm
          </Button>

          <Tooltip
            title="Tính công ngày"
            style={{ marginRight: "20px", marginLeft: "20px" }}
          >
            <IconButton>
              <ExposureIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Thêm dữ liệu chấm công">
            <IconButton>
              <NoteAddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cập nhật thông tin chấm công">
            <IconButton>
              <CreateIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Xóa">
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>

        <div>
          <Button startIcon={<AssignmentIcon />}> tổng hợp công</Button>
        </div>
      </Toolbar>
    </>
  );
};
export default ToolBar;
