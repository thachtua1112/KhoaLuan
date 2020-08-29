import React from "react";

import { CDataTable, CPagination } from "@coreui/react";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "./Loading.component";
import NoItem from "./NoItem.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "grid",
    padding: "4px",
    borderRadius: "4px",
    backgroundColor: "#e8eaf5",
  },
  jss1: {
    overflow: "auto",
    maxWidth: "100%",
    backgroundColor: "#fff",
    borderRadius: "4px",
    //height: "80vh",
  },
  table: {
    borderRadius: "4px",
    "& thead": {
      color: "white",
      backgroundColor: "#425677",
    },
  },
}));

const Table = (props) => {
  const classes = useStyles();
  const {
    isLoading = false,
    items = [],
    currentPage = 1,
    limitPage = 5,
    perPage = 1,
    onPageChange,
  } = props;
  return (
    <div className={classes.root}>
      <div className={classes.jss1}>
        <CDataTable
          {...props}
          addTableClasses={classes.table}
          items={isLoading ? [] : items}
          pagination={false}
          border
          size="sm"
          noItemsViewSlot={isLoading ? <Loading /> : <NoItem />}
          underTableSlot={
            items.length <= 0 ? null : (
              <div className={"mt-2"}>
                <CPagination
                  activePage={currentPage}
                  pages={perPage}
                  onActivePageChange={onPageChange}
                  limit={limitPage}
                />
              </div>
            )
          }
        />
      </div>
    </div>
  );
};
export default Table;
