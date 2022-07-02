import {Route, Redirect} from "react-router-dom";
import React from "react";

// @ts-ignore
export default function PublicRoute({component: Component, ...rest}) {
  const {isAuthenticated}: any = false;

  return (
    <Route {...rest} exact={true}>
      {!isAuthenticated ? <Component /> : <Redirect exact={true} to="/token" />}
    </Route>
  );
}
