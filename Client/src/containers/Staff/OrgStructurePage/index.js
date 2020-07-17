import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

const OrgStructurePage = () => {
  return (
    <Grid container>
      <Grid item xs={4} lg={3}>
        <Paper
        // elevation={0}
        >
          <Autocomplete
            id="disabled-options-demo"
            options={timeSlots}
            getOptionDisabled={(option) =>
              option === timeSlots[0] || option === timeSlots[2]
            }
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Tim kiem" variant="outlined" />
            )}
          />
          <OrgStructureTree />
        </Paper>
      </Grid>

      <Grid item xs={8} lg={9}>
        <Paper>xs=6</Paper>
      </Grid>
    </Grid>
  );
};

export default OrgStructurePage;

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);
