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
    padding: "8px",
  },
});

const OrgStructureTree = (props) => {
  const {
    StructureTree,
    setOrgStructureSelected,
    OrgStructureSelected,
  } = props;

  const classes = useStyles();
  const renderTree = (nodes) =>
    !nodes ? (
      <LinearProgress />
    ) : (
      <StyledTreeItem
        key={nodes.data.ID}
        nodeId={nodes.data.ID}
        labelText={`${nodes.data.Code}-${nodes.data.OrgStructureName}`}
        labelIcon={nodes.children ? PeopleAltIcon : PersonOutlineIcon}
        color="#a250f5"
        bgColor="#f3e8fd"
        labelInfo="100"
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </StyledTreeItem>
    );

  return (
    <TreeView
      className={classes.root}
      defaultEndIcon={<div style={{ width: 24 }} />}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      selected={[!OrgStructureSelected ? null : OrgStructureSelected]}
      onNodeSelect={(event, item) => {
        setOrgStructureSelected(item);
      }}
    >
      <Button
        variant="outlined"
        startIcon={<AccountTreeIcon color="action" />}
        disabled
        fullWidth
      >
        <Typography align="left" variant="h6" color="textPrimary">
          Sơ đồ tổ chức
        </Typography>
      </Button>

      {renderTree(StructureTree)}
    </TreeView>
  );
};

export default OrgStructureTree;
