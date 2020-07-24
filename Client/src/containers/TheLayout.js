import React from "react";
import {
  TheContent,
  TheSidebar,
  //TheFooter,
  TheHeader,
} from "./index";
import { CSubheader, CBreadcrumbRouter, CLink } from "@coreui/react";
import routes from "../routes";
import CIcon from "@coreui/icons-react";

const TheLayout = (props) => {
  return (
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
            </CSubheader>
          }

          <TheContent />
        </div>
        {
          //<TheFooter/>
        }
      </div>
    </div>
  );
};

export default TheLayout;
