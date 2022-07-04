import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

import styled from "styled-components";
import "./App.scss";

import PrivateRoute from "./routes/private.route";

import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";
import {NotFoundPage} from "./pages/NotFoundPage";

const Main = styled.main`
  color: white;
  padding: 50px 100px;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Main className="relative bg-primary h-full overflow-hidden">
        <Switch>
          <Route exact={true} path="/" component={GetToken} />
          <PrivateRoute exact={true} path="/board" component={MainView} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
