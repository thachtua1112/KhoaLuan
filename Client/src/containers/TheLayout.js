import React, { useState, useEffect } from "react";
import {
  TheContent,
  TheSidebar,
  //TheFooter,
  TheHeader,
} from "./index";
import { CSubheader, CBreadcrumbRouter } from "@coreui/react"; //CLink
import routes from "../routes";
//import CIcon from "@coreui/icons-react";

import { CategoryProvider } from "./CategoryContext";

import OrgStructureAPI from "../api/cat_org_structure.api";
import OrgStructureTreeAPI from "../api/cat_org_structure_tree.api";

import PositionAPI from "../api/cat_position.api";

const TheLayout = (props) => {
  const { IsLogged, setIsLogged } = props;

  const [ListOrgStructure, setListOrgStructure] = useState([]);
  const [OrgStructureTree, setOrgStructureTree] = useState(null);
  const [ListPosition, setListPosition] = useState([]);

  useEffect(() => {
    OrgStructureTreeAPI.getByRootID()
      .then((res) => {
        if (res.data) setOrgStructureTree(res.data.StructureTree);
      })
      .catch((err) => console.log(err));

    OrgStructureAPI.get({
      all: 1,
      fields: {
        ID: 1,
        Code: 1,
        OrgStructureName: 1,
      },
    })
      .then((res) => {
        setListOrgStructure(res.data);
      })
      .catch((err) => console.log(err));

    PositionAPI.get({
      all: 1,
      fields: {
        ID: 1,
        Code: 1,
        PositionName: 1,
      },
    })
      .then((res) => {
        setListPosition(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CategoryProvider
      value={{
        ListOrgStructure: ListOrgStructure,
        OrgStructureTree: OrgStructureTree,
        ListPosition: ListPosition,
      }}
    >
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader {...props} />
          <div className="c-body">
            {
              <CSubheader className="px-3 justify-content-between">
                <CBreadcrumbRouter
                  className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                  routes={routes}
                />
                {/*
              <div className="d-md-down-none mfe-2 c-subheader-nav">
                <CLink className="c-subheader-nav-link" href="#">
                  <CIcon name="cil-speech" alt="Settings" />
                </CLink>
                <CLink
                  className="c-subheader-nav-link"
                  aria-current="page"
                  to="/"
                >

                  <CIcon name="cil-graph" alt="Dashboard" />
                  &nbsp;Dashboard
                </CLink>
                <CLink className="c-subheader-nav-link" href="#">
                  <CIcon name="cil-settings" alt="Settings" />
                  &nbsp;Settings
                    </CLink>
              </div>
                  */}
              </CSubheader>
            }

            <TheContent IsLogged={IsLogged} setIsLogged={setIsLogged} />
          </div>
          {
            //<TheFooter/>
          }
        </div>
      </div>
    </CategoryProvider>
  );
};

export default TheLayout;
