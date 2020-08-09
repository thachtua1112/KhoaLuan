import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CFade } from "@coreui/react";

import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

// routes config
import routes from "../routes";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      "& table": {
        "table-layout": "fixed",
      },
      "& table> tbody > tr.selected ":{
        "background-color":"#89cdf9",      
      },
      "& th ": {
        "padding":"7px"
      },
      "& td ": {
        "padding":"7px"
      },
    height: "100vh",
  },
}))


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {

  const classes = useStyles();

  if (localStorage.getItem("token") === null) {
    return <Redirect to='/login'/>
  }

  
  return (
    <main
    //className="c-main"
    className={classes.root}
    >
      <Container disableGutters maxWidth={false}>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  );
};

export default React.memo(TheContent);
