import React from "react";

import { CDataTable } from "@coreui/react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "grid",
    padding: "4px",
    borderRadius: "4px",
    backgroundColor: "#e8eaf5",
  },
  jss1:{
    overflow: "auto",
    maxWidth:"100%",
    backgroundColor: "#fff",
    borderRadius: "4px",
    height:"80vh"
  },
  table:{
    borderRadius: "4px",
  }
}));
const getIsBlackList = IsBlackList => {
  switch (IsBlackList) {
    case 1: return 'Nằm trong danh sách đen (Chú ý)';
    default: return ''
  }
}
const Content = (props) => {

  const {data,fields,RowSelected,setRowSelected,noItem}=props

  // const dataRender= data.map((item,index)=>{

  //   if(item._id===RowSelected._id)
  //       return {...item,_classes:"selected"}
  //    return item
  // })
  const dataRender=data.map((item,index)=>{
    for (let index = 0; index < RowSelected.length; index++) {
      const element = RowSelected[index];
      if(item._id===element._id)
        return {...item,_classes:"selected"}
    }
    return item
  })
  const classes = useStyles();

  // const onSelectRow=(row)=>{
  //   if(RowSelected&&row._id===RowSelected._id){
  //     return setRowSelected({})
  //   }
  //   setRowSelected(row)
  // }
  const onSelectRow=(row)=>{
    for (let index = 0; index < RowSelected.length; index++) {
      const element = RowSelected[index];
      if(element._id===row._id)
      {
        return setRowSelected([...RowSelected.slice(0,index),...RowSelected.slice(index+1,RowSelected.length)])
      }
    }
    setRowSelected([row,...RowSelected])
  }
  return (

    <div className={classes.root}>
    <div className={classes.jss1}>
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
        onRowClick={onSelectRow}
        noItemsViewSlot={noItem}
        scopedSlots = {{
            'IsBlackList':
              (item)=>(
                <td>
                  {getIsBlackList(item.IsBlackList)}
                </td>)
          }}
      />
      </div>
    </div>

  );
};
export default Content;
