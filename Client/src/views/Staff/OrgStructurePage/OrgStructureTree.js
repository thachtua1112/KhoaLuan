import React from "react";

import {
  makeStyles,
  Button,
  Typography,
  LinearProgress,
} from "@material-ui/core";

import TreeView from "@material-ui/lab/TreeView";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

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
  const { StructureTree } = props;

  const classes = useStyles();
  const renderTree = (nodes) =>
    !nodes ? (
      <LinearProgress />
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
      <Button
        variant="outlined"
        startIcon={<AccountTreeIcon color="action" />}
        disabled
        fullWidth
      >
        <Typography> Sơ đồ tổ chức</Typography>
      </Button>

      {renderTree(StructureTree)}
    </TreeView>
  );
};

export default OrgStructureTree;
