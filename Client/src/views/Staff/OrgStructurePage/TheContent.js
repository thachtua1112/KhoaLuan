import React, { useState, useEffect } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { CDataTable, CSidebarNav } from "@coreui/react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper } from "@material-ui/core";

const TheContent = (props) => {
  const {
    fields,
    OrgStructureSelected,
    setEmployeeSelected,
    EmployeeSelected,
  } = props;

  const [ListProfile, setListProfile] = useState([]);

  useEffect(() => {
    if (null === OrgStructureSelected) return;
    OrgStructureAPI.getListProfile(OrgStructureSelected.ID)
      .then((resListProfile) => {
        setListProfile(resListProfile.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [OrgStructureSelected]);

  const selectEmployee = (employee) => {
    if (employee === EmployeeSelected) setEmployeeSelected(null);
    else setEmployeeSelected(employee);
  };

  return (
    <Paper style={{ height: "89vh" }}>
      <CSidebarNav>
        <CDataTable
          size="sm"
          pagination={ListProfile.length > 15 ? true : false}
          itemsPerPage={15}
          items={ListProfile}
          fields={fields}
          scopedSlots={scopedSlots}
          onRowClick={(item) => selectEmployee(item)}
        />
      </CSidebarNav>
    </Paper>
  );
};

export default TheContent;
const scopedSlots = {
  selected: (item) => {},
};
