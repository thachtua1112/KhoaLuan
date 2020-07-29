import React, { useEffect, useState } from "react";

import ProfileAPI from "../../../../callAPI/Profile.api";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import { CSidebarNav } from "@coreui/react";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";
import Content from "./Content.Component";

import { ProfileFields, defaultProfileFields } from "../../utils/fieldsProfile";

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

const ListEmployeePage = () => {
  const classes = useStyles();

  const [ListEmployee, setListEmployee] = useState([]);
  const [RowsSelected, setRowsSelected] = useState([]);
  const [FieldsShow, setFieldsShow] = useState(defaultProfileFields);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await ProfileAPI.getProfiles();

      setListEmployee(res.data);
    };
    fetchAPI();
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.search}>{<Search />}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.toolbar} variant="outlined">
          <ToolBar
            setFieldsShow={setFieldsShow}
            ProfileFields={ProfileFields}
            defaultProfileFields={defaultProfileFields}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.content}>
          <CSidebarNav>
            <Content
              RowsSelected={RowsSelected}
              setRowsSelected={setRowsSelected}
              fields={FieldsShow}
              data={ListEmployee}
            />
          </CSidebarNav>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListEmployeePage;
