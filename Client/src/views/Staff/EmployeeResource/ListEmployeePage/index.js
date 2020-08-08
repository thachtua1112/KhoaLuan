import React, {  useState } from "react";

import { Grid, Paper } from "@material-ui/core";

import Search from "./Search.Component";
import ToolBar from "./ToolBar.Component";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content.Component";

import {defaultProfileFields} from "../../utils/fieldsProfile"

import  ProfileAPI  from "../../../../callAPI/Profile.api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {},
  toolbar: {},
  content: {},
}));

const ListEmployeePage = (props) => {
  const classes = useStyles();

  const [Filter, setFilter] = useState({});
  const [RowSelected, setRowSelected] = useState(null)
  const [ListProfile, setListProfile] = useState([])

  const onSearch = async () => {
    try {
      const res = await ProfileAPI.getProfiles(Filter);
      // const res=await axios.get("http://localhost:3001/api/v1/profiles",{
      //   data:"abc"
      // })
      setListProfile(res.data)
    } catch (error) {
      console.log("DanhSachNhanVien ProfileAPI ERR", error);
    }
  };

  return (
    <Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.search}>
          <Search Filter={Filter} setFilter={setFilter} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.toolbar}>
          <ToolBar onSearch={onSearch} RowSelected={RowSelected} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined" className={classes.content}>
          <Content data={ListProfile} fields={defaultProfileFields}  RowSelected={RowSelected} setRowSelected={setRowSelected}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListEmployeePage;
