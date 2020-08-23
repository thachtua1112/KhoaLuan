import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../callAPI/Cat_OrgStructure.api";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl } from "@material-ui/core";

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
  date: {
    width: theme.spacing(24),
    marginRight: theme.spacing(2),
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
    Filter, setFilter,
  } = props;

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
         <Grid item xs={3}>
             Mã nhân viên
          <TextField
        value={!Filter.CodeEmp ? "" : Filter.CodeEmp}
        onChange={(event) => {
          if ("" !== event.target.value.trim())
            return setFilter({
              ...Filter,
              ...{ CodeEmp: event.target.value.trim() },
            });
          const { CodeEmp, ...FilterNew } = Filter;
          setFilter(FilterNew);
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
        value={!Filter.ProfileName ? "" : Filter.ProfileName}
        onChange={(event) => {
          if ("" !== event.target.value.trim())
            return setFilter({
              ...Filter,
              ...{ ProfileName: event.target.value.trim() },
            });
          const { ProfileName, ...FilterNew } = Filter;
          setFilter(FilterNew);
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
            if (item)
              return setFilter({
                ...Filter,
                ...{ OrgStructureID: item.ID },
              });
            const { OrgStructureID, ...FilterNew } = Filter;
            setFilter(FilterNew);
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
      Trạng thái
      {
        <TextField
          size="small"
          select
          value={!Filter.Status ? "" : Filter.Status}
          onChange={(event) => {
            if ("" !== event.target.value.trim())
            return setFilter({
              ...Filter,
              ...{ Status: event.target.value.trim() },
            });
          const { Status, ...FilterNew } = Filter;
          setFilter(FilterNew);
          }}
          variant="outlined"
        >
          {StatusValue.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      }
    </FormControl>
    </Grid> 
   </Grid>

   <Grid className={classes.paper} container spacing={2}>
   <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <Grid item xs={5}>
       <FormControl fullWidth>
         Dữ liệu chấm công
         <div style={{ paddingTop: "8px" }}>
           <KeyboardDatePicker
             inputVariant="outlined"
             clearable
             label="Từ ngày"
             size="small"
             fullWidth={false}
             className={classes.date}
             format="dd/MM/yyyy"
             value={
               !Filter.DateKeeping
                 ? null
                 : !Filter.DateKeeping["$gte"]
                 ? null
                 : Filter.DateKeeping["$gte"]
             }
             maxDate={
               !Filter.DateKeeping
                 ? new Date()
                 : !Filter.DateKeeping["$lte"]
                 ? new Date()
                 : Filter.DateKeeping["$lte"]
             }
             onChange={(date) => {
               if (null !== date)
                 return setFilter({
                   ...Filter,
                   ...{ DateKeeping: { ...Filter.DateKeeping, $gte: date } },
                 });
               if (!Filter.DateKeeping) {
                 const { DateKeeping, ...FilterNew } = Filter;
                 return setFilter(FilterNew);
               }
               const { $gte, ...DateKeepingNew } = Filter.DateKeeping;
               setFilter({ ...Filter, DateKeeping: DateKeepingNew });
             }}
           />
           <KeyboardDatePicker
             inputVariant="outlined"
             clearable
             size="small"
             fullWidth={false}
             className={classes.date}
             minDate={
               !Filter.DateKeeping
                 ? 0
                 : !Filter.DateKeeping["$gte"]
                 ? 0
                 : Filter.DateKeeping["$gte"]
             }
             maxDate={new Date()}
             label="Đến ngày"
             format="dd/MM/yyyy"
             value={
               !Filter.DateKeeping
                 ? null
                 : !Filter.DateKeeping["$lte"]
                 ? null
                 : Filter.DateKeeping["$lte"]
             }
             onChange={(date) => {
               if (null !== date)
                 return setFilter({
                   ...Filter,
                   ...{ DateKeeping: { ...Filter.DateKeeping, $lte: date } },
                 });
               if (!Filter.DateKeeping) {
                 const { DateKeeping, ...FilterNew } = Filter;
                 return setFilter(FilterNew);
               }
               const { $lte, ...DateKeepingNew } = Filter.DateKeeping;
               setFilter({ ...Filter, DateKeeping: DateKeepingNew });
             }}
           />
         </div>
       </FormControl>
     </Grid>
   </MuiPickersUtilsProvider>
 </Grid>

    </Grid>
  );
};

export default Search;

const StatusValue = [
  {
    value: "",
    label: "None",
  },
  {
    value: "DA_TINH_CONG",
    label: "Đã tính công",
  },
  {
    value: "CHUA_TINH_CONG",
    label: "Chưa tính công",
  },
];
