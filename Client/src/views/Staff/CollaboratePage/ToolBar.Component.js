import React from "react";

import { useHistory } from "react-router-dom";

import { Toolbar, Tooltip, IconButton,makeStyles, Chip, Typography } from "@material-ui/core";

//import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SearchIcon from "@material-ui/icons/Search";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ProfileAPI from "../../../callAPI/Profile.api";
import CustomizedDialogs from "./UpdateStatus";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: "4px",
      paddingRight:"4px",
    },
    left: {
        flexGrow: 1,
        display:"flex"
    },
    search:{
        marginRight:theme.spacing(3)
    },
    right: {
     display:"flex"
    },
    setting:{
        marginLeft:theme.spacing(5)
    }
  }));


const ToolBar = (props) => {

    const classes = useStyles();

  const history = useHistory();

  const {  onSearch ,RowSelected ,setshowNewProfile } = props;

  const goDetail = () => {
    ProfileAPI.getProfiles({CodeEmp:RowSelected.CodeEmp}).then(res=>{
      history.push(`/nhan-su/chi-tiet-nhan-vien/${res.data[0].ProfileID}`);
    })
  };
  const goUpdate = () => {
    ProfileAPI.getProfiles({CodeEmp:RowSelected.CodeEmp}).then(res=>{
      history.push(`/nhan-su/qua-trinh-cong-tac/cap-nhat-ho-so/${res.data[0].ProfileID}`);
    })
  };

  return (

      <Toolbar variant="dense" disableGutters className={classes.root} >
      <div className={classes.left}>
         <Chip
            icon={<SearchIcon />}
            label="Tìm kiếm"
            clickable
            className={classes.search}
            onClick={onSearch}
            color="primary"
            />
            <Typography variant="h6" component="h2">
            Nhân viên : {RowSelected?RowSelected.ProfileName:null}
            </Typography>

    </div>
    <CustomizedDialogs/>

     <div className={classes.right}>

    <div>


    <IconButton onClick={()=>setshowNewProfile(true)} disabled={RowSelected.Status==='Chuẩn bị công tác'?false:true}>
    <Tooltip title="Thêm hồ sơ">
      <NoteAddIcon />
      </Tooltip>
    </IconButton>

    <IconButton  onClick={goUpdate} disabled={RowSelected.Status==='Chuẩn bị công tác'?false:true}>
    <Tooltip title="Thay đổi hồ sơ">
      <NoteAddIcon />
      </Tooltip>
    </IconButton>

     <IconButton disabled={JSON.stringify(RowSelected)===JSON.stringify({})?true:false}   onClick={goDetail}>
      <Tooltip   title="Xem chi tiết hồ sơ">
       <FindInPageIcon />
       </Tooltip>
     </IconButton>


       <IconButton disabled={JSON.stringify(RowSelected)===JSON.stringify({})?true:false}>
       <Tooltip title="Xóa hồ sơ">
         <DeleteOutlineIcon />
         </Tooltip>
       </IconButton>

     </div>
     <div
     className={classes.setting}
     >

        <IconButton>
        <Tooltip title="Export">
          <SaveAltIcon />
          </Tooltip>
        </IconButton>

        <IconButton>
        <Tooltip title="Cài đặt hiển thị">
          <SettingsIcon />
          </Tooltip>
        </IconButton>

      </div>
      </div>
      </Toolbar>

  );
};
export default ToolBar;