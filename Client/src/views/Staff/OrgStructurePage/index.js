import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { ProfileFields } from "../utils/fields";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TheSidebar from "./TheSidebar";
import TheContent from "./TheContent";

import { makeStyles } from "@material-ui/core/styles";
//import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: "center",
    height: "100vh",
    color: theme.palette.text.secondary,
  },
}));

const OrgStructurePage = () => {
  const classes = useStyles();
  ///const history = useHistory();
  const [EmployeeSelected, setEmployeeSelected] = useState(null);

  const [OrgStructureSelected, setOrgStructureSelected] = useState(null);
  const [StructureTree, setStructureTree] = useState(null);

  useEffect(() => {
    OrgStructureAPI.getStructureTree()
      .then((resStructureTree) => {
        setStructureTree(resStructureTree.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // const detailEmployee = () => {
  //   history.push(`/nhan-su/chi-tiet-nhan-vien/${EmployeeSelected.CodeEmp}`);
  // };

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={4} lg={3}>
        <Paper className={classes.paper}>
          <TheSidebar
            StructureTree={StructureTree}
            setOrgStructureSelected={setOrgStructureSelected}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper className={classes.paper}>
          <TheContent
            setEmployeeSelected={setEmployeeSelected}
            EmployeeSelected={EmployeeSelected}
            fields={ProfileFields}
            OrgStructureSelected={OrgStructureSelected}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;
