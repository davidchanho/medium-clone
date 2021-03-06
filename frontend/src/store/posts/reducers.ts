import produce from "immer";
import { IPost } from "../../types";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";
import { initialPublication } from "./../publications/reducers";
import { initialUser } from "./../users/reducers";

export const initialPost: IPost = {
  _id: "",
  publication: initialPublication,
  user: initialUser,
  title: "",
  body: "",
  image: "",
  date: "",
  readingTime: "",
  comments: [],
  excerpt: 0,
};

export interface IPostsState {
  posts: IPost[];
  post: IPost;
  hero: IPost;
  trending: IPost[];
  featured: IPost[];
  reading: IPost[];
  loading: boolean;
  error: string;
}

const initialPostsState: IPostsState = {
  posts: [],
  post: initialPost,
  hero: initialPost,
  trending: [],
  featured: [],
  reading: [],
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
        state.hero = action.payload[0];
        state.trending = action.payload.slice(0, 6);
        state.featured = action.payload.slice(0, 4);
        state.reading = action.payload.slice(0, 4);
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
      case ActionTypes.DISMISS_POST:
        const dismissIndex = state.posts.findIndex(
          (post) => post._id === action.payload
        );
        if (dismissIndex !== -1) state.posts.splice(dismissIndex, 1);
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
