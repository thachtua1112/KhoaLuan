import React, { useState } from "react";

import { Grid, Paper, Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";


import { makeStyles } from "@material-ui/core/styles";

import Content from "./Content.Component";
import NewAndDetail from "./NewAndDetail.Component";


import LevaeDayAPI from "../../../callAPI/Att_LeaveDay.api";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {},
  toolbar: {},
  content: {},
}));




const EmployeeQuitPage = (props) => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({});
  const [ShowNewAndDetail, setShowNewAndDetail] = useState({
    show:false,
    option:"new"
  });
  const [RowSelected, setRowSelected] = useState({});
  const [ListProfile, setListProfile] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const [ConfimDelete, setConfimDelete] = useState(false);


  const onSearch = async () => {
    try {
      setIsLoading(true)
      setListProfile([])
      setRowSelected({})
      const res = await LevaeDayAPI.get(Filter);
      setListProfile(res.data.data);
      setIsLoading(false)
    } catch (error) {
      console.log("DanhSachNhanVien ProfileAPI ERR", error);
    }
  };


  const onDelete = async () => {
    try {
      setRowSelected({})
      await LevaeDayAPI.deleteX(RowSelected._id);
      const index=ListProfile.findIndex((item)=>item._id===RowSelected._id)
      if(-1!==index)
        setListProfile([...ListProfile.slice(0,index),...ListProfile.slice(index+1,ListProfile.length)]);
        setConfimDelete(false)
    } catch (error) {
      console.log("DanhSachNhanVien ProfileAPI ERR", error);
    }
  };

  return (
    <Grid className={classes.root}>
{!ShowNewAndDetail.show?null:<NewAndDetail 
    Show={ShowNewAndDetail}
    document={RowSelected} 
    setShow={setShowNewAndDetail} 
    />}
      <Grid item>
        <Paper variant="outlined" className={classes.search}>

          <Search Filter={Filter} setFilter={setFilter} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.toolbar}>
          <ToolBar 
           onSearch={onSearch}
           setShowNewAndDetail={setShowNewAndDetail}
           RowSelected={RowSelected}
           setConfimDelete={setConfimDelete}
            />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.content}>
          <Content
           data={ListProfile}
           fields={fields}
           isLoading={IsLoading}
            RowSelected={RowSelected}
            setRowSelected={setRowSelected}
          />
        </Paper>
      </Grid>
      <Dialog
      open={ConfimDelete}
      // disableBackdropClick={true}
      // disableEscapeKeyDown={true}
      onClose={()=>setConfimDelete(false)}
    >
      <DialogTitle >Xác nhận xóa</DialogTitle>
       <DialogActions>
          <Button 
          onClick={()=>setConfimDelete(false)}
           color="primary">
           Không
          </Button>
          <Button
           onClick={onDelete} 
           color="primary" autoFocus>
            Có
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default EmployeeQuitPage;

const fields=[
  { _style: { width: "150px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
    {
    _style: { width: "300px" },
    key: "OrgStructureName",

    label: "Phòng ban",
  },
  { _style: { width: "150px" }, key: "DayLeave", label: "Ngày nghỉ" },
  { _style: { width: "150px" }, key: "LeaveReason", label: "Lí do" },
  { _style: { width: "150px" }, key: "Description", label: "Ghi chú" },
  { _style: { width: "100px" }, key: "Status", label: "Trạng thái" },

];

