import React, {  useEffect ,useState} from "react";

import { Autocomplete } from "@material-ui/lab";

import {
  MenuItem,
  FormControl,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


import OrgStructureAPI from "../../../callAPI/Cat_OrgStructure.api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    //padding: theme.spacing(1),
  },
  date: {
    width: "49%",
    marginRight: "1%",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const { Filter, setFilter } = props;

  const [ListOrgStructure, setListOrgStructure] = useState([]);


  useEffect(() => {
    const fetchAPI = async () => {
      const org = await OrgStructureAPI.getListOrgStructure();
      setListOrgStructure(org.data);
    };
    fetchAPI();
  }, []);

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Mã nhân viên
          <TextField
            placeholder="Vui lòng nhập"
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
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Số CMND
          <TextField
            value={!Filter.IDNo1 ? "" : Filter.IDNo1}
            onChange={(event) => {
              if ("" !== event.target.value.trim())
                return setFilter({
                  ...Filter,
                  ...{ IDNo1: event.target.value.trim() },
                });
              const { IDNo1, ...FilterNew } = Filter;
              setFilter(FilterNew);
            }}
            placeholder="Vui lòng nhập"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          Phòng ban
          {
            <Autocomplete
              filterSelectedOptions
              multiple
              limitTags={1}
              defaultValue={[]}
              options={ListOrgStructure}
              getOptionLabel={(option) =>
                `${option.OrgStructureName}-${option.Code}`
              }
              getOptionSelected={(option, value) => option.ID === value.ID}
              renderInput={(params) => (
                <TextField {...params} size="small" variant="outlined" />
              )}
              onChange={(event, item) => {
                if (0 < item.length) {
                  return setFilter({
                    ...Filter,
                    ...{ OrgStructureID: { $in: item.map((i) => i.ID) } },
                  });
                }
                const { OrgStructureID, ...FilterNew } = Filter;
                setFilter(FilterNew);
              }}
            />
          }
        </Grid>
      </Grid>
      <Grid className={classes.paper} container spacing={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                Ngày nghỉ
                <div>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    clearable
                    label="Từ ngày"
                    size="small"
                    fullWidth={false}
                    className={classes.date}
                    format="dd/MM/yyyy"
                    value={
                      !Filter.DateLeave
                        ? null
                        : !Filter.DateLeave["$gt"]
                        ? null
                        : Filter.DateLeave["$gt"]
                    }
                    maxDate={
                      !Filter.DateLeave
                        ? new Date("01/01/2100")
                        : !Filter.DateLeave["$lte"]
                        ? new Date()
                        : Filter.DateLeave["$lte"]
                    }
                    onChange={(date) => {
                      if (null !== date)
                        return setFilter({
                          ...Filter,
                          ...{ DateLeave: { ...Filter.DateLeave, $gt: date } },
                        });
                      if (!Filter.DateLeave) {
                        const { DateLeave, ...FilterNew } = Filter;
                        return setFilter(FilterNew);
                      }
                      const { $gt, ...DateLeaveNew } = Filter.DateLeave;
                      setFilter({ ...Filter, DateLeave: DateLeaveNew });
                    }}
                  />
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    clearable
                    size="small"
                    fullWidth={false}
                    className={classes.date}
                    minDate={
                      !Filter.DateLeave
                        ? 0
                        : !Filter.DateLeave["$gt"]
                        ? 0
                        : Filter.DateLeave["$gt"]
                    }
                    label="Đến ngày"
                    format="dd/MM/yyyy"
                    value={
                      !Filter.DateLeave
                        ? null
                        : !Filter.DateLeave["$lte"]
                        ? null
                        : Filter.DateLeave["$lte"]
                    }
                    onChange={(date) => {
                      if (null !== date)
                        return setFilter({
                          ...Filter,
                          ...{ DateLeave: { ...Filter.DateLeave, $lte: date } },
                        });
                      if (!Filter.DateLeave) {
                        const { DateLeave, ...FilterNew } = Filter;
                        return setFilter(FilterNew);
                      }
                      const { $lte, ...DateLeaveNew } = Filter.DateLeave;
                      setFilter({ ...Filter, DateLeave: DateLeaveNew });
                    }}
                  />
                </div>
              </FormControl>
            </Grid>
          </MuiPickersUtilsProvider>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Trạng thái
            {
              <TextField
                value={!Filter.StatusSyn ? "" : Filter.StatusSyn}
                onChange={(event) => {
                  if ("" !== event.target.value.trim())
                    return setFilter({
                      ...Filter,
                      ...{ StatusSyn: event.target.value.trim() },
                    });
                  const { StatusSyn, ...FilterNew } = Filter;
                  setFilter(FilterNew);
                }}
                variant="outlined"
                size="small"
                select
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

const StatusValue = [
  {
    value: "",
    label: "None",
  },
  {
    value: "E_CANCEL",
    label: "DA_HUY",
  },
  {
    value: "E_HIRE",
    label: "DA_DUYET",
  },
  {
    value: "E_STOP",
    label: "CHUA_DUYET",
  },
];


