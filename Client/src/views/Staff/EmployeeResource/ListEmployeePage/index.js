import React, { useEffect, useState } from "react";

import ProfileAPI from "../../../../callAPI/Profile.api";

import Tool from "./Tool";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import TheContent from "./TheContent";

import { ProfileFields } from "../../utils/fields.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },

  tool: {
    height: "7vh",
  },
  content: { height: "93vh" },
}));

const ListEmployeePage = () => {
  const [ListEmployee, setListEmployee] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await ProfileAPI.getProfiles();
      console.log(res.data);
      setListEmployee(res.data);
    };
    fetchAPI();
  }, []);

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.tool}>
          <Tool />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.content}>
          {<TheContent data={ListEmployee} fields={ProfileFields} />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListEmployeePage;
