import React, {  useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";

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

  const [RowsSelected, setRowsSelected] = useState([]);

  const onSearch= async()=>{
    const filter ={...Filter,...(!Filter.KiCong?null:{KiCong:`${("0" +(Filter.KiCong.getMonth()+1)).slice(-2)}/${Filter.KiCong.getFullYear()}`})}
    const res= await TimeKeepingGroupAPI.getDataTimeKeepingGroup(filter)
    setListDataTimeKeeping(res.data.data)
  }
 

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
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
          <ToolBar onSearch={onSearch}  RowsSelected={RowsSelected} />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.content}>
          <CSidebarNav>
            <Content RowsSelected={RowsSelected} setRowsSelected={setRowsSelected} fields={fields} data={ListDataTimeKeeping} />
          </CSidebarNav>
        </Paper>
      </Grid>
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
  { _style: { width: "250px" }, key: "avssds", label: "Ghi chú" },
  {
    _style: { width: "250px" },
    key: "Status",
    label: "Status",
  },
];
