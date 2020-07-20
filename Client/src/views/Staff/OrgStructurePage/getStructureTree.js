import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import TreeView from "@material-ui/lab/TreeView";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import getStructureTreeApi from "../../../callAPI/OrgStructure.api";
import StyledTreeItem from "../OrgStructurePage/StyledTreeItem";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "auto",
  },
});
const OrgStructureTree = () => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    getStructureTreeApi(null).then((res) => {
      if (res.data) {
        // console.log(res.data)
        setData(res.data);
        console.log("du lieu", data1);
        return;
      }
    });
  });
  const renderTree = (nodes) => (
    <StyledTreeItem
      key={nodes.data.ID}
      nodeId={nodes.data.ID}
      labelText={nodes.data.OrgStructureName}
      labelIcon={nodes.children ? PeopleAltIcon : PersonOutlineIcon}
      color="#a250f5"
      bgColor="#f3e8fd"
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <TreeView
      className={useStyles.root}
      //defaultParentIcon={<PeopleAltIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultExpanded={["root"]}
    >
      Sơ đồ tổ chức
      {renderTree(data1)}
    </TreeView>
  );
};

export default OrgStructureTree;
