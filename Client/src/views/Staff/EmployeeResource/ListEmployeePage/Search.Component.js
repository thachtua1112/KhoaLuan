import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "25vh",
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(0),
    //textAlign: "center",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
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
          Giới tính
          <RadioGroup
            aria-label="gender"
            name="gender1"
            row
            //value={value} onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Nam" />
            <FormControlLabel value="male" control={<Radio />} label="Nữ" />
            <FormControlLabel value="other" control={<Radio />} label="Khác" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          Số CMND or Thẻ căn cước
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
      </Grid>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Phòng ban
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Chức danh
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Chức vụ
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Trạng thái
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
      </Grid>
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={3}>
          Ngày vào làm
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Ngày kết thúc thử việc
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Mã chấm công
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={3}>
          Loại nhân viên
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
      </Grid>
      <Button startIcon={<SearchIcon />}>Tìm kiếm</Button>
    </Grid>
  );
};

export default Search;
