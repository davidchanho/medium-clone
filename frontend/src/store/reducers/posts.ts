import { nanoid } from "@reduxjs/toolkit";
import produce from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const initialPost: IPost = {
  _id: nanoid(),
  title: "",
  body: "",
};

export interface IPost {
  _id: string;
  title: string;
  body: string;
}

export interface IPostsState {
  posts: IPost[];
  post: IPost;
  loading: boolean;
  error: string;
}

const initialPostsState: IPostsState = {
  posts: [],
  post: { _id: "", title: "", body: "" },
  loading: false,
  error: "",
};

const postsReducers = produce(
  (state: IPostsState = initialPostsState, action: Action) => {
    switch (action.type) {
      case ActionTypes.ADD_POST:
        state.posts.push(action.payload);
        return state;
      case ActionTypes.FETCH_POSTS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_POSTS_SUCCESS:
        state.posts = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_POSTS_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_POST:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_POST_SUCCESS:
        state.post = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_POST_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.DELETE_POST:
        const deleteIndex = state.posts.findIndex(
          (post) => post._id === action.payload
        );
        if (deleteIndex !== -1) state.posts.splice(deleteIndex, 1);
        return state;
      case ActionTypes.UPDATE_POST:
        const updateIndex = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (updateIndex !== -1)
          state.posts.splice(updateIndex, 1, action.payload);
        return state;
      default:
        return state;
    }
  }
);

export default postsReducers;
