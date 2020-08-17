import React from "react";

import { Toolbar, Tooltip, IconButton,makeStyles, Chip, Typography } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SearchIcon from '@material-ui/icons/Search';
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';



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

  const {  RowsSelected } = props;


  return (
   
      <Toolbar variant="dense" disableGutters className={classes.root} >
      <div className={classes.left}> 
      <Chip
      icon={<SearchIcon />}
      label="TÌM KIẾM"
      clickable
      className={classes.search} 
      //onClick={searchDataTimeKeeping}
      color="primary" 
      />
            <Typography variant="h6" component="h2" style={{width:"200px"}}>
            {RowsSelected.length>0?`${RowsSelected.length} dòng đã chọn`:null}
            </Typography>

          
  
    </div> 
      
     
     <div className={classes.right}> 
    

    <div>
    <Chip
    icon={<ReplaySharpIcon />}
    label="TỔNG HỢP LẠI"
    clickable
    className={classes.search} 
    color="primary" 
    />
     <IconButton   >
      <Tooltip   title="Xem chi tiết">
       <FindInPageIcon />
       </Tooltip>
     </IconButton>
    
     <IconButton >
     <Tooltip title="Sửa">
       <CreateIcon />
       </Tooltip>     
     </IconButton>
  
       <IconButton >
       <Tooltip title="Xóa">
         <DeleteOutlineIcon />
         </Tooltip> 
       </IconButton>
     
     </div>
     <div
     className={classes.setting}
     >     
      </div>
      </div>
       
      </Toolbar>
   
  );
};
export default ToolBar;
