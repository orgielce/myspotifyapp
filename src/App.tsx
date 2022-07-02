import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./routes/private.route";
import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact={true} path="/" component={MainView} />
        <Route exact={true} path="/token" component={GetToken} />
        {/*<Route path="*" component={NotFoundPage} />*/}
      </Switch>
    </Router>
  );
};

export default App;
