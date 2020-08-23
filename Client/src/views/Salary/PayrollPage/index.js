import React, {  useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";

import SalaryAPI from "../../../callAPI/Att_Salary.api"

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

const PayrollPage = () => {
  const classes = useStyles();

const initDate=new Date()
initDate.setDate(0)
initDate.setHours(0)


  const [Filter, setFilter] = useState({KiCong:initDate})
   
  const [ListDataTimeKeeping, setListDataTimeKeeping] = useState([]);

  const [RowsSelected, setRowsSelected] = useState([]);

  const TinhLuong= async()=>{
    const strKiCong=`${("0" +(Filter.KiCong.getMonth()+1)).slice(-2)}/${Filter.KiCong.getFullYear()}`
    const res= await SalaryAPI.payroll({...Filter,KiCong:strKiCong})
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
          <ToolBar TinhLuong={TinhLuong}  RowsSelected={RowsSelected} />
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

export default PayrollPage;

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
  { _style: { width: "150px" }, key: "TotalKeepingReality", label: "Số ngày công" },
  //{ _style: { width: "150px" }, key: "StandardDayKeeping ", label: "Ngày công chuẩn" },
  {
    _style: { width: "150px" },
    key: "SalaryContract",
    label: "Hợp đồng",
  },
  { _style: { width: "150px" }, key: "Salary", label: "Tính lương" },
];
