import produce from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export interface IPost {
  title: string;
  body: string;
}

export interface IPostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: string | null;
}

const initialPostsState: IPostsState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
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
      default:
        return state;
    }
  }
);

export default postsReducers;
