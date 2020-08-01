import React, { useEffect, useState } from "react";

import TimeKeepingAPI from "../../../../callAPI/TimeKeeping.api";

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

const TimeKeepingDayPage = () => {
  const classes = useStyles();

  const [CodeEmp, setCodeEmp] = useState(null);
  const [ProfileName, setProfileName] = useState(null);
  const [IDNo, setIDNo] = useState(null);
  const [Gender, setGender] = useState(null);
  const [OrgStructureID, setOrgStructureID] = useState(null);
  const [Date1, setDate1] = useState(null);
  const [Date2, setDate2] = useState(null);
  const [Status, setStatus] = useState(null);

  //////////////////
  const [ListDataTimeKeeping, setListDataTimeKeeping] = useState([]);


  //////

  const searchDataTimeKeeping = async () => {
    const res = await TimeKeepingAPI.getDataTimeKeeping({
      CodeEmp,
      ProfileName,
      IDNo,
      Gender,
      OrgStructureID,
      Date1,
      Date2,
      Status,
    });
    setListDataTimeKeeping(res.data.data);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await TimeKeepingAPI.getDataTimeKeeping();
      setListDataTimeKeeping(res.data.data);
    };
    fetchAPI();
  }, []);

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
              IDNo={IDNo}
              setIDNo={setIDNo}
              Gender={Gender}
              setGender={setGender}
              OrgStructureID={OrgStructureID}
              setOrgStructureID={setOrgStructureID}
              Date1={Date1}
              setDate1={setDate1}
              Date2={Date2}
              setDate2={setDate2}
              Status={Status}
              setStatus={setStatus}
            />
          }
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.toolbar} variant="outlined">
          <ToolBar searchDataTimeKeeping={searchDataTimeKeeping} />
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

export default TimeKeepingDayPage;

const fields = [
  { _style: { width: "150px" }, key: "CodeEmp", label: "Mã nhân viên" },
  { _style: { width: "200px" }, key: "ProfileName", label: "Tên nhân viên" },
  {
    _style: { width: "300px" },
    key: "OrgStructureID",

    label: "Phòng ban",
  },
  { _style: { width: "250px" }, key: "DateKeeping", label: "DateKeeping" },
  //{ _style: { width: "250px" }, key: "ProfileID", label: "ProfileID" },
  {
    _style: { width: "250px" },
    key: "TimeKeepingType",
    label: "TimeKeepingType",
  },
  { _style: { width: "250px" }, key: "TimeIn", label: "TimeIn" },
  { _style: { width: "250px" }, key: "TimeOut", label: "TimeOut" },
  { _style: { width: "250px" }, key: "Description ", label: "Description" },
  {
    _style: { width: "250px" },
    key: "TotalHours",
    label: "TotalHours",
  },
  { _style: { width: "250px" }, key: "TotalDay", label: "TotalDay" },
  {
    _style: { width: "250px" },
    key: "Status",
    label: "Status",
  },
];
