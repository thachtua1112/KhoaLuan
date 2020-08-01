import React from "react";

import { Toolbar, Tooltip, IconButton, Button } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";


import FindInPageIcon from "@material-ui/icons/FindInPage";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


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

  const { searchDataTimeKeeping } = props;

  return (
    <>
      <Toolbar className={classes.root}>
        <div className={classes.action}>
         
          <Button
          onClick={searchDataTimeKeeping}
          variant="outlined"
          startIcon={<RotateLeftIcon />}
        >
         Tổng hợp lại
        </Button>
        <Tooltip title="Xem chi tiết hồ sơ">
        <IconButton>
          <FindInPageIcon />
        </IconButton>
      </Tooltip>

         

          <Tooltip title="Sửa">
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

      
      </Toolbar>
    </>
  );
};
export default ToolBar;
