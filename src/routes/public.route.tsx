import {Route, Redirect} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

// @ts-ignore
export default function PublicRoute({component: Component, ...rest}) {
  const {isAuthenticated} = useSelector((state: RootState) => state.token);

  return (
    <Route {...rest} exact={true}>
      {!isAuthenticated ? <Redirect exact={true} to="/token" /> : <Component />}
      {/*{!isAuthenticated && <Redirect exact={true} to="/token" />}*/}
    </Route>
  );
}
