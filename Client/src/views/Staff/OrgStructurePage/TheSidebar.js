import React from "react";

import { Paper, FormControlLabel, Switch, Button } from "@material-ui/core";

import { CSidebar, CSidebarNav } from "@coreui/react";

import CachedIcon from "@material-ui/icons/Cached";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";
//import OrgStructureTree from "./getStructureTree";

const TheSidebar = () => {
  return (
    <Paper
    // elevation={0}
    >
      <CSidebarNav>
        <Button color="secondary" endIcon={<CachedIcon />} size="small">
          Nạp lại dữ liệu
        </Button>

        <FormControlLabel
          control={
            <Switch
              checked={true}
              // onChange={toggleChecked}
            />
          }
          labelPlacement="end"
          label="Hiển thị phòng ban ẩn"
        />
        <Autocomplete
          elevation={0}
          id="disabled-options-demo"
          options={timeSlots}
          getOptionDisabled={(option) =>
            option === timeSlots[0] || option === timeSlots[2]
          }
          fullWidth
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tìm kiếm phòng ban"
              variant="outlined"
            />
          )}
        />
        <OrgStructureTree />
      </CSidebarNav>
    </Paper>
  );
};

export default TheSidebar;

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);
