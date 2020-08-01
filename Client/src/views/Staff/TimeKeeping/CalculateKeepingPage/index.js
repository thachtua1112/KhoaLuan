import React, { useEffect, useState } from "react";

import TimeKeepingGroupAPI from "../../../../callAPI/TimeKeepingGroup.api";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //height: "100vh" ,
  },
  search: { paddingLeft: theme.spacing(1) },
  toolbar: {
    paddingLeft: theme.spacing(0),
    //marginBottom: "0px",
    marginTop: "4px",
  },
  content: { height: "75vh", paddingLeft: theme.spacing(1) },
}));

const CalculateKeepingPage = () => {
  const classes = useStyles();

  const [CodeEmp, setCodeEmp] = useState(null);
  const [ProfileName, setProfileName] = useState(null);

  const [OrgStructureID, setOrgStructureID] = useState(null);
  const date=new  Date();
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  const [Date1, setDate1] = useState(new  Date(date));

  
  //////////////////
  const [ListDataTimeKeeping, setListDataTimeKeeping] = useState([]);
 // const [RowsSelected, setRowsSelected] = useState({});

  //////


  useEffect(() => {
    const fetchAPI = async () => {
      const res = await TimeKeepingGroupAPI.getDataTimeKeepingGroup();
      setListDataTimeKeeping(res.data.data);
    };
    fetchAPI();
  }, []);

  const reLoad=async()=>{
    const res = await TimeKeepingGroupAPI.getDataTimeKeepingGroup();
    setListDataTimeKeeping(res.data.data);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.search}>
          {
            <Search
              CodeEmp={CodeEmp}
              setCodeEmp={setCodeEmp}
              ProfileName={ProfileName}
              setProfileName={setProfileName} 
              OrgStructureID={OrgStructureID}
              setOrgStructureID={setOrgStructureID}
              Date1={Date1}
              setDate1={setDate1}
              reLoad={reLoad}
             
             
            />
          }
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.toolbar} variant="outlined">
          <ToolBar  />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.content}>
          <CSidebarNav>
            <Content fields={fields} data={ListDataTimeKeeping} />
          </CSidebarNav>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CalculateKeepingPage;

const fields = [
  { _style: { width: "150px" }, key: "KiCong", label: "Kì công" },
  { _style: { width: "150px" }, key: "Year", label: "Năm" },
  { _style: { width: "150px" }, key: "Month", label: "Tháng" },
  { _style: { width: "150px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "300px" },
    key: "OrgStructureID",

    label: "Phòng ban",
  },
  { _style: { width: "250px" }, key: "TotalKeepingReality", label: "Tổng ngày công thực tế" },
  {
    _style: { width: "250px" },
    key: "SabbaticalLeave",
    label: "Nghỉ có phép",
  },
  { _style: { width: "250px" }, key: "UnSabbaticalLeave", label: "Nghỉ không phép" },
  { _style: { width: "250px" }, key: "SumKeeping", label: "Tổng hợp công" },
  { _style: { width: "250px" }, key: "avssds", label: "Ghi chú" },
  {
    _style: { width: "250px" },
    key: "Status",
    label: "Status",
  },
];
