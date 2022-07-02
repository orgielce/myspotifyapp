import {Route, Redirect, useLocation} from "react-router-dom";

// @ts-ignore
export default function PrivateRoute({component: Component, ...rest}) {
  const {isAuthenticated}: any = false;
  const location = useLocation();

  return (
    <Route {...rest} exact={true}>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Redirect
          exact={true}
          to={{
            pathname: "/token",
            state: {from: location},
          }}
        />
      )}
    </Route>
  );
}
