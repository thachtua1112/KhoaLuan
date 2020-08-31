import React from "react";

import Table from "../../../share/component/Table.component";

const Content = (props) => {
  const {
    fields,
    data,
    CurrentPage,
    Loading,
    setCurrentPage,
    PerPage,
    totalDocuments,
    fetchData,
  } = props;

  const onPageChange = (page) => {
    fetchData(page);
    setCurrentPage(page);
  };

  return (
    <Table
      fields={fields}
      items={data}
      currentPage={CurrentPage}
      onPageChange={(i) => onPageChange(i)}
      isLoading={Loading}
      perPage={PerPage}
      totalDocuments={totalDocuments}
    />
  );
};
export default Content;
