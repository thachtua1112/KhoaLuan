import React, {  useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper, Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";
import Detail from "./Detail.Component";


import TimeKeepingGroupAPI from "../../../callAPI/TimeKeepingGroup.api"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //height: "100vh" ,
  },
  search: { paddingLeft: theme.spacing(1) },
  toolbar: {
    paddingLeft: theme.spacing(0),
    marginTop: "4px",
  },
  content: { height: "75vh", paddingLeft: theme.spacing(1) },
}));

const TimeKeepingGroupPage = () => {
  const classes = useStyles();



  const [Filter, setFilter] = useState({})
  const [ListDataTimeKeeping, setListDataTimeKeeping] = useState([]);
  const [RowsSelected, setRowsSelected] = useState(null);
  const [ShowDetail, setShowDetail] = useState(false);
  const [ConfimDelete, setConfimDelete] = useState(false);

  const onSearch= async()=>{
    const filter ={...Filter,...(!Filter.KiCong?null:{KiCong:`${("0" +(Filter.KiCong.getMonth()+1)).slice(-2)}/${Filter.KiCong.getFullYear()}`})}
    const res= await TimeKeepingGroupAPI.getDataTimeKeepingGroup(filter)
    setListDataTimeKeeping(res.data.data)
  }

  const onSave= async(id,data)=>{
    const res=await TimeKeepingGroupAPI.update(id,data)
    setRowsSelected(res.data.data)
    const index=ListDataTimeKeeping.findIndex(item=>item._id===res.data.data._id)
    setListDataTimeKeeping([...ListDataTimeKeeping.slice(0,index),res.data.data,...ListDataTimeKeeping.slice(index+1,ListDataTimeKeeping.length)])
  }

  const onDelete= async()=>{
    await TimeKeepingGroupAPI.deleteX(RowsSelected._id)
    const index=ListDataTimeKeeping.findIndex(item=>item._id===RowsSelected._id)
    setListDataTimeKeeping([...ListDataTimeKeeping.slice(0,index),...ListDataTimeKeeping.slice(index+1,ListDataTimeKeeping.length)])
    setRowsSelected(null)
    setConfimDelete(false)
  }



  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {!ShowDetail?null:<Detail onSave={onSave} document={RowsSelected} show={setShowDetail}/>}
        <Paper className={classes.search}>
          {
            <Search
            Filter={Filter}
            setFilter={setFilter}
            />
          }
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.toolbar} variant="outlined">
          <ToolBar setConfimDelete={setConfimDelete} show={setShowDetail} onSearch={onSearch}  RowsSelected={RowsSelected} />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.content}>
          <CSidebarNav>
            <Content RowsSelected={RowsSelected} setRowsSelected={setRowsSelected} fields={fields} data={ListDataTimeKeeping} />
          </CSidebarNav>
        </Paper>
      </Grid>
      <Dialog
      open={ConfimDelete}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogTitle >XAC NHAN XOA</DialogTitle>
       <DialogActions>
          <Button 
          onClick={()=>setConfimDelete(false)}
           color="primary">
            Khong
          </Button>
          <Button
           onClick={onDelete} 
           color="primary" autoFocus>
            Co
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TimeKeepingGroupPage;

const fields = [
  { _style: { width: "80px" }, key: "KiCong", label: "Kì công" },
  // { _style: { width: "150px" }, key: "Year", label: "Năm" },
  // { _style: { width: "150px" }, key: "Month", label: "Tháng" },
  { _style: { width: "120px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "250px" },
    key: "OrgStructureName",
    label: "Phòng ban",
  },
  { _style: { width: "150px" }, key: "TotalKeepingReality", label: "Ngày công thực tế" },
  {
    _style: { width: "150px" },
    key: "SabbaticalLeave",
    label: "Nghỉ có phép",
  },
  { _style: { width: "150px" }, key: "UnSabbaticalLeave", label: "Nghỉ không phép" },
  { _style: { width: "150px" }, key: "SumKeeping", label: "Tổng hợp công" },
  { _style: { width: "250px" }, key: "Description", label: "Ghi chú" },
  {
    _style: { width: "250px" },
    key: "Status",
    label: "Status",
  },
];
