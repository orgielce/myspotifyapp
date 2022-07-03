import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

import PrivateRoute from "./routes/private.route";

import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";
import {NotFoundPage} from "./pages/NotFoundPage";

const Main = styled.main`
  color: white;
  height: 93vh;
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
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
