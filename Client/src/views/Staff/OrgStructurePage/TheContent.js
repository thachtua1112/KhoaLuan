import React from "react";

import { CDataTable } from "@coreui/react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const TheContent = () => {
  return (
    <Card>
      <CardContent>DS NHAN VIEN</CardContent>
      <CDataTable
        size="small"
        items={[]}
        fields={["selected", "MaNV", "TenNV", "Phong ban"]}
      />
      <CardActions>Card action</CardActions>
    </Card>
  );
};

export default TheContent;
