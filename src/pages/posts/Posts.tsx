import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectPosts} from "../../redux/reducers";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
`;

export const PostsList = () => {
  const posts = useSelector(selectPosts);

  const renderedPosts = posts.map((post) => (
    <Article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/post/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </Article>
  ));

  return (
    <section>
      <br />
      <br />
      <br />
      <h2>
        <i>Posts</i>
      </h2>
      {renderedPosts}
    </section>
  );
};
