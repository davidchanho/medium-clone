import produce from "immer";
import { IPost } from "./types";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const initialPost: IPost = {
  _id: "",
  publicationId: "",
  userId: "",
  title: "",
  body: "",
  image: "",
  date: "",
  readingTime: "",
  comments: [],
};

export interface IPostsState {
  posts: IPost[];
  post: IPost;
  loading: boolean;
  error: string;
}

const initialPostsState: IPostsState = {
  posts: [],
  post: initialPost,
  loading: false,
  error: "",
};

const postsReducers = produce(
  (state: IPostsState = initialPostsState, action: Action): IPostsState => {
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
        const deletePostIndex = state.posts.findIndex(
          (post) => post._id === action.payload
        );
        if (deletePostIndex !== -1) state.posts.splice(deletePostIndex, 1);
        return state;
      case ActionTypes.UPDATE_POST:
        const updatePostIndex = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (updatePostIndex !== -1)
          state.posts.splice(updatePostIndex, 1, action.payload);
        return state;
      default:
        return state;
    }
  }
);

export default postsReducers;
