import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import styled from "styled-components";

import {Inbox} from "./pages/Inbox";
import {PostForm} from "./pages/posts/PostForm";
import {PostsList} from "./pages/posts/Posts";
import {SinglePostPage} from "./pages/posts/SinglePostPage";
import {EditPostForm} from "./pages/posts/EditPostForm";
import {GeneralLayout} from "./pages/GeneralLayout";

const Main = styled.main`
  background: #fff;
  align-content: center;
  align-items: center;
  display: block;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  return (
    <Router>
      <GeneralLayout />
      {/*<Navbar />*/}
      {/*<Main>*/}
      {/*  <Inbox />*/}
      {/*  <Switch>*/}
      {/*    <Route*/}
      {/*      exact={true}*/}
      {/*      path="/posts"*/}
      {/*      render={() => (*/}
      {/*        <React.Fragment>*/}
      {/*          <PostForm />*/}
      {/*          <PostsList />*/}
      {/*        </React.Fragment>*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <Route exact={true} path="/post/:postId" component={SinglePostPage} />*/}
      {/*    <Route exact={true} path="/post/:postId/edit" component={EditPostForm} />*/}
      {/*    <Redirect to="/" />*/}
      {/*  </Switch>*/}
      {/*</Main>*/}
    </Router>
  );
};

export default App;
