import {Route, Redirect, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

// @ts-ignore
export default function PrivateRoute({component: Component, ...rest}) {
  const {isAuthenticated} = useSelector((state: RootState) => state.token);
  const location = useLocation();

  return (
    <Route {...rest} exact={true}>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Redirect
          exact={true}
          to={{
            pathname: "/",
            state: {from: location},
          }}
        />
      )}
    </Route>
  );
}
