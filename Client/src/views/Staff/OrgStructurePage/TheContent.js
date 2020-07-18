import React from "react";

import { CDataTable } from "@coreui/react";
import Paper from "@material-ui/core/Paper";

const TheContent = () => {
  return (
    <Paper>
      DS NV
      <CDataTable
        size="small"
        items={[]}
        fields={["selected", "MaNV", "TenNV", "Phong ban"]}
      />
    </Paper>
  );
};

export default TheContent;
