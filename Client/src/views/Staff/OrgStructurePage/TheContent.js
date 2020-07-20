import React from "react";

import { CDataTable } from "@coreui/react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const TheContent = (props) => {
  const { fields, items } = props;
  return (
    <Card style={{ height: "98vh" }}>
      <CardContent>Danh sách nhân viên</CardContent>
      <CardContent>
        <CDataTable
          size="sm"
          pagination
          items={[]}
          fields={["selected", "MaNV", "TenNV", "Phong ban"]}
        />
      </CardContent>

      <CardActions>Card action</CardActions>
    </Card>
  );
};

export default TheContent;
