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
  var dataRender=data;
  if(RowsSelected){
  dataRender=data.map((item,index)=>{
      if(item._id===RowsSelected._id){
        return {...item,_classes:"selected"} 
    }
    return item
  })
}

  const handleSelectRow=(row)=>{
    if(!RowsSelected){
      return setRowsSelected(row)
    }  
    if(RowsSelected._id!==row._id){
      return setRowsSelected(row)
    }
    return setRowsSelected(null)
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
