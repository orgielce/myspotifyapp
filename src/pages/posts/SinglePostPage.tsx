import React, {useEffect} from "react";
// import {useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../../redux/store";

export const SinglePostPage = () => {
  const {postId} = useParams<{postId: string}>();
  let post = undefined;
  try {
    post = useSelector((state) =>
      store.getState().posts.find((post) => post.id === postId)
    );
  } catch (e) {
    throw e;
  }

  // useEffect(() => {
  //
  //   console.log(params, 44444444444);
  //   return;
  // }, []);

  return (
    <section>
      <article className="post">
        <h2>{post?.title}</h2>
        <p className="post-content">{post?.content}</p>
        <Link to={`/post/${post?.id}/edit`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
