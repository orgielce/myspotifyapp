import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import styled from "styled-components";
import "./App.scss";

import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Details} from "./components/Details";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

const Main = styled.main`
  color: white;
  padding: 50px 100px;
`;

const App = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.token);
  // @ts-ignore
  function PrivateRoute({children}) {
    return isAuthenticated ? children : <Navigate to="/token" />;
  }

  return (
    <>
      <Navbar />
      <Main className="relative bg-primary h-full overflow-hidden">
        <Routes>
          <Route path="/token" element={<GetToken />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainView />
              </PrivateRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
