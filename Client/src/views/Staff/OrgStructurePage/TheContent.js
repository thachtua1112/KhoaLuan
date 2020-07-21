import React from "react";

import { CDataTable, CSidebarNav } from "@coreui/react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const TheContent = (props) => {
  return (
    <Card style={{ height: "98vh" }}>
      <CSidebarNav>
        <CardContent>Danh sách nhân viên</CardContent>
        <CardContent>
          <CDataTable
            size="sm"
            pagination
            itemsPerPage={15}
            items={items}
            fields={fields}
          />
        </CardContent>
      </CSidebarNav>
    </Card>
  );
};

export default TheContent;
