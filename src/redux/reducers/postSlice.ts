import {createSlice} from "@reduxjs/toolkit";
import {RootState, store} from "../store";

const initialState = [
  {id: "1", title: "First Post!", content: "Hello!"},
  {id: "2", title: "Second Post", content: "More text"},
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      state.map((post) => {
        if (post.id === action.payload.id) {
          return {...post, title: action.payload.title, content: action.payload.content};
        }
        return post;
      });
    },
  },
});

export const {postAdded, postUpdated} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

// export const selectPostById = (postId: any) =>
//   store?.getState().posts.find((post) => post.id === postId);

export default postsSlice.reducer;
