import React from "react";

import { CDataTable } from "@coreui/react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& table": {
      "table-layout": "fixed",
    },
  },
}));

const Content = (props) => {
  const { fields, data,RowsSelected ,setRowsSelected} = props;

  const dataRender=data.map((item,index)=>{
    for (let index = 0; index < RowsSelected.length; index++) {
      const element = RowsSelected[index];
      if(item._id===element._id)
        return {...item,_classes:"selected"} 
    }
    return item
  })

  const handleSelectRow=(row)=>{
    for (let index = 0; index < RowsSelected.length; index++) {
      const element = RowsSelected[index];
      if(element._id===row._id)
      return setRowsSelected([...RowsSelected.slice(0,index),...RowsSelected.slice(index+1,RowsSelected.length)])
    }
    setRowsSelected([row,...RowsSelected])
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CDataTable
      addTableClasses={classes.table}
      fields={fields}
      items={dataRender}
      pagination={data.length > 20 ? true : false}
      itemsPerPage={20}
      border
      hover
      striped
      size="sm"
      onRowClick={handleSelectRow}
      />
    </div>
  );
};
export default Content;
