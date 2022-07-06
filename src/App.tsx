import React from "react";
import {Routes, Route} from "react-router-dom";

import styled from "styled-components";
import "./App.scss";

import {Navbar} from "./pages/Navbar";
import {MainView} from "./pages/MainView";
import {GetToken} from "./pages/GetToken";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Details} from "./components/Details";
import {Logo} from "./pages/logo";

const Main = styled.main`
  color: white;
  padding: 50px 100px;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Main className="relative bg-primary h-full overflow-hidden">
        <Routes>
          <Route path="/token" element={<GetToken />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/" element={<MainView />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
