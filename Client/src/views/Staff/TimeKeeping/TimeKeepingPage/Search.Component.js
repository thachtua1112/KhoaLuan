import React, { useEffect, useState } from "react";

import OrgStructureAPI from "../../../../callAPI/OrgStructure.api";

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
    IDNo,
    setIDNo,
    Gender,
    setGender,
    setOrgStructureID,
    Date1,
    setDate1,
    Date2,
    setDate2,
    Status,
    setStatus,
  } = props;

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Mã nhân viên
          <TextField
            value={!CodeEmp ? "" : CodeEmp}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(event) => {
              setCodeEmp(event.target.value);
            }}
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
          Số CMND
          <TextField
            value={!IDNo ? "" : IDNo}
            onChange={(event) => {
              setIDNo(event.target.value);
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            Giới tính
            {
              <TextField
                size="small"
                select
                value={!Gender ? "" : Gender}
                variant="outlined"
                onChange={(event) => {
                  setGender(
                    "" === event.target.value ? null : event.target.value
                  );
                }}
              >
                {GenderValue.map((option) => (
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

        <Grid item xs={5}>
          <FormControl fullWidth>
            Dữ liệu chấm công
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  clearable
                  size="small"
                  fullWidth={false}
                  className={classes.date1}
                  emptyLabel="Từ ngày"
                  format="MM/dd/yyyy"
                  maxDate={!Date2 ? null : Date2}
                  value={Date1}
                  onChange={(date) => setDate1(date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  inputVariant="outlined"
                  clearable
                  size="small"
                  fullWidth={false}
                  className={classes.date2}
                  emptyLabel="Đến ngày"
                  format="MM/dd/yyyy"
                  value={Date2}
                  minDate={!Date1 ? null : Date1}
                  onChange={(date) => setDate2(date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Trạng thái
            {
              <TextField
                size="small"
                select
                value={!Status ? "" : Status}
                onChange={(event) => {
                  setStatus(
                    "" === event.target.value ? null : event.target.value
                  );
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
    </Grid>
  );
};

export default Search;

const GenderValue = [
  {
    value: null,
    label: "None",
  },
  {
    value: "E_MALE",
    label: "Nam",
  },
  {
    value: "E_FEMALE",
    label: "Nữ",
  },
];

const StatusValue = [
  {
    value: null,
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
