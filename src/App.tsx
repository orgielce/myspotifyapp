import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from "styled-components";

import PrivateRoute from "./routes/private.route";

import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";

const Main = styled.main`
  color: white;
  height: 93.6vh;
  padding: 50px 100px;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Main className="bg-primary">
        <Switch>
          <PrivateRoute exact={true} path="/" component={MainView} />
          <Route exact={true} path="/token" component={GetToken} />
          {/*<Route path="*" component={NotFoundPage} />*/}
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
