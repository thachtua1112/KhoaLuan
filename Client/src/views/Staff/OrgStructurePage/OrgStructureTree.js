import React, { useState, useEffect } from "react";

import OrgStructureAPI from "../../../callAPI/OrgStructureAPI";

import { makeStyles } from "@material-ui/core";

import TreeView from "@material-ui/lab/TreeView";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import StyledTreeItem from "./StyledTreeItem";

const useStyles = makeStyles({
  root: {
    //height: 264,
    //flexGrow: 1,
    //overflow: "auto",
    //maxWidth: 400,
  },
});

const OrgStructureTree = (props) => {
  const [tree, setTree] = useState(null);

  useEffect(() => {
    OrgStructureAPI.getOrgStructureTree(null).then((res) => {
      setTree(res.data);
    });
  }, []);

  const classes = useStyles();
  const renderTree = (nodes) =>
    !nodes ? (
      "AHIHI KO CO J  "
    ) : (
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
      className={classes.root}
      //defaultParentIcon={<PeopleAltIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultExpanded={["root"]}
    >
      Sơ đồ tổ chức
      {renderTree(tree)}
    </TreeView>
  );
};

export default OrgStructureTree;
