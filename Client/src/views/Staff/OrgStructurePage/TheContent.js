import React, { useState, useEffect } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructure.api";

import { CDataTable, CSidebarNav } from "@coreui/react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const TheContent = (props) => {
  const { fields, OrgStructureSelected } = props;

  const [ListProfile, setListProfile] = useState([]);

  useEffect(() => {
    if (null === OrgStructureSelected) return;
    OrgStructureAPI.getListProfile(OrgStructureSelected)
      .then((resListProfile) => {
        setListProfile(resListProfile.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [OrgStructureSelected]);

  return (
    <Card style={{ height: "98vh" }}>
      <CSidebarNav>
        <CardContent>Danh sách nhân viên</CardContent>
        <CardContent>
          <CDataTable
            size="sm"
            pagination
            itemsPerPage={15}
            items={ListProfile}
            fields={fields}
            scopedSlots={scopedSlots}
          />
        </CardContent>
      </CSidebarNav>
    </Card>
  );
};

const scopedSlots = {
  selected: (item) => {},
};

export default TheContent;
