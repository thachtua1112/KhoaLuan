import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <div className="text-center my-5">
      <h2>
        {"Đang tải dữ liệu"}
        <CircularProgress />
      </h2>
    </div>
  );
};

export default Loading;
