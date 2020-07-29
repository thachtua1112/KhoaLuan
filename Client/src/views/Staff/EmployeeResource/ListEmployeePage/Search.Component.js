import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl } from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

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
    width: theme.spacing(25),
    marginRight: theme.spacing(2),
  },
}));

const Search = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
  };

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Mã nhân viên
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Tên nhân viên
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Số CMND
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            Giới tính
            {
              <TextField
                size="small"
                select
                value={""}
                name="Gender"
                // style={{ width: "100px" }}
                variant="outlined"

              >
                {Gender.map((option) => (
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
          <Autocomplete
            id="combo-box-demo"
            value={1}
            options={[
              { id: 1, title: "abc" },
              { id: 2, title: "abcD" },
              { id: 3, title: "abcE" },
            ]}
            name="PHONGAN"
            onChange={handleChange}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} size="small" variant="outlined" />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            Chức vụ
            {
              <TextField
                size="small"
                select
                value={""}
                // onChange={handleChange}

                variant="outlined"
              >
                {Gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          </FormControl>
        </Grid>
        {
          //   <Grid item xs={3}>
          //   <FormControl fullWidth>
          //     Loại nhân viên
          //     {
          //       <TextField
          //         size="small"
          //         select
          //         value={null}
          //         // onChange={handleChange}
          //         variant="outlined"
          //       >
          //         {Gender.map((option) => (
          //           <MenuItem key={option.value} value={option.value}>
          //             {option.label}
          //           </MenuItem>
          //         ))}
          //       </TextField>
          //     }
          //   </FormControl>
          // </Grid>
        }

        <Grid item xs={3}>
          <FormControl fullWidth>
            Trạng thái
            {
              <TextField
                size="small"
                select
                value={""}
                // onChange={handleChange}

                variant="outlined"
              >
                {StatusSyn.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          </FormControl>
        </Grid>
      </Grid>
      {
        // <Grid className={classes.paper} container spacing={2}>
        //   <Grid item xs={5}>
        //     <FormControl fullWidth>
        //       Ngày vào làm
        //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //         <div>
        //           <KeyboardDatePicker
        //             inputVariant="outlined"
        //             clearable
        //             size="small"
        //             fullWidth={false}
        //             className={classes.date}
        //             id="date-picker-dialog"
        //             emptyLabel="Từ ngày"
        //             format="MM/dd/yyyy"
        //             value={null}
        //             // onChange={handleDateChange}
        //             KeyboardButtonProps={{
        //               "aria-label": "change date",
        //             }}
        //           />
        //           <KeyboardDatePicker
        //             inputVariant="outlined"
        //             clearable
        //             size="small"
        //             fullWidth={false}
        //             className={classes.date}
        //             emptyLabel="Đến ngày"
        //             id="date-picker-dialog"
        //             format="MM/dd/yyyy"
        //             value={null}
        //             // onChange={handleDateChange}
        //             KeyboardButtonProps={{
        //               "aria-label": "change date",
        //             }}
        //           />
        //         </div>
        //       </MuiPickersUtilsProvider>
        //     </FormControl>
        //   </Grid>
        //   <Grid item xs={5}>
        //     <FormControl fullWidth>
        //       Ngày thôi việc
        //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //         <div>
        //           <KeyboardDatePicker
        //             inputVariant="outlined"
        //             clearable
        //             size="small"
        //             fullWidth={false}
        //             className={classes.date}
        //             id="date-picker-dialog"
        //             emptyLabel="Từ ngày"
        //             format="MM/dd/yyyy"
        //             value={null}
        //             // onChange={handleDateChange}
        //             KeyboardButtonProps={{
        //               "aria-label": "change date",
        //             }}
        //           />
        //           <KeyboardDatePicker
        //             inputVariant="outlined"
        //             clearable
        //             size="small"
        //             fullWidth={false}
        //             className={classes.date}
        //             emptyLabel="Đến ngày"
        //             id="date-picker-dialog"
        //             format="MM/dd/yyyy"
        //             value={null}
        //             // onChange={handleDateChange}
        //             KeyboardButtonProps={{
        //               "aria-label": "change date",
        //             }}
        //           />
        //         </div>
        //       </MuiPickersUtilsProvider>
        //     </FormControl>
        //   </Grid>
        // </Grid>
      }
    </Grid>
  );
};

export default Search;

const Gender = [
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

const StatusSyn = [
  {
    value: null,
    label: "None",
  },
  {
    value: "E_HIRE",
    label: "Đang làm việc",
  },
  {
    value: "E_STOP",
    label: "Nghỉ việc",
  },
];
