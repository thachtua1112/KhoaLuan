import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../../callAPI/OrgStructure.api";
import TimeKeepingGroupAPI from "../../../../callAPI/TimeKeepingGroup.api";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {  FormControl, Button } from "@material-ui/core";

import ExposureIcon from "@material-ui/icons/Exposure";

//import Autocomplete from "@material-ui/lab/Autocomplete";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    //textAlign: "center",
  },
  date1: {
    width: theme.spacing(26),
    marginRight: theme.spacing(2),
  },
  date2: {
    width: theme.spacing(26),
  },
}));

const getListOrg = (Tree, listOrg = []) => {
  if (null === Tree) return listOrg;
  if (!Tree.children) {
    listOrg.push({
      ID: Tree.data.ID,
      Code: Tree.data.Code,
      OrgStructureName: Tree.data.OrgStructureName,
    });
    return listOrg;
  }
  Tree.children.forEach((item) => {
    getListOrg(item, listOrg);
  });
  return listOrg;
};

const Search = (props) => {
  const [OrgStructure, setOrgStructure] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await OrgStructureAPI.getStructureTree();
      const listOrg = getListOrg(result.data);
      setOrgStructure(listOrg);
    };
    fetchAPI();
  }, []);
  const classes = useStyles();

  const {
    CodeEmp,
    setCodeEmp,
    ProfileName,
    setProfileName,
    OrgStructureID,
    setOrgStructureID,
    Date1,
    setDate1,
    reLoad
  } = props;


  const calculateTimeKeeping= async()=>{
    const data={CodeEmp,ProfileName,OrgStructureID,KiCong:Date1}
    await TimeKeepingGroupAPI.calculateTimeKeepingGroup(data)
    reLoad()
  }

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Mã nhân viên
          <TextField
            value={!CodeEmp ? "" : CodeEmp}
            onChange={(event) => {
              setCodeEmp(event.target.value);
            }}
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Tên nhân viên
          <TextField
            value={!ProfileName ? "" : ProfileName}
            onChange={(event) => {
              setProfileName(event.target.value);
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Phòng ban
          {
            <Autocomplete
              options={OrgStructure}
              onChange={(event, item) => {
                setOrgStructureID(item.ID);
              }}
              getOptionLabel={(option) =>
                `${option.OrgStructureName}-${option.Code}`
              }
              renderInput={(params) => (
                <TextField {...params} size="small" variant="outlined" />
              )}
            />
          }
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
        Kì công
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  inputVariant="outlined"
                 // clearable
                  size="small"
                  fullWidth={false}
                  className={classes.date1}
                  emptyLabel="Kì công"
                  views={["year", "month"]}
                  format="MM/yyyy"
                  value={Date1}
                  onChange={(date) => setDate1(date)}
                 
                />          
              </div>
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
        <Grid className={classes.paper} container spacing={2}>
          <Grid item xs={3}>  <Button variant="outlined"
        onClick={calculateTimeKeeping} startIcon={<ExposureIcon />}> tổng hợp công</Button> 
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;

