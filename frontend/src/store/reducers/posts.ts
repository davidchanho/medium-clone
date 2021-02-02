import { nanoid } from "@reduxjs/toolkit";
import produce from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const initialPost: IPost = {
  _id: nanoid(),
  _publicationId: "",
  title: "",
  body: "",
  image: "",
};

export interface IPost {
  _id: string;
  _publicationId: string;
  title: string;
  body: string;
  image: string;
}

export const initialPublication: IPublication = {
  _id: nanoid(),
  name: "",
  posts: [],
};

export interface IPublication {
  _id: string;
  name: string;
  posts: IPost[];
}

export interface IPostsState {
  publications: IPublication[];
  publication: IPublication;
  posts: IPost[];
  post: IPost;
  loading: boolean;
  error: string;
}

const initialPostsState: IPostsState = {
  publications: [],
  publication: { _id: "", name: "", posts: [] },
  posts: [],
  post: { _id: "", _publicationId: "", title: "", body: "", image: "" },
  loading: false,
  error: "",
};

const postsReducers = produce(
  (state: IPostsState = initialPostsState, action: Action): IPostsState => {
    switch (action.type) {
      case ActionTypes.ADD_POST:
        state.publication.posts.push(action.payload);
        return state;
      case ActionTypes.FETCH_POSTS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_POSTS_SUCCESS:
        state.publication.posts = action.payload;
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
        const deletePostIndex = state.publication.posts.findIndex(
          (post) => post._id === action.payload
        );
        if (deletePostIndex !== -1)
          state.publication.posts.splice(deletePostIndex, 1);
        return state;
      case ActionTypes.UPDATE_POST:
        const updatePostIndex = state.publication.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (updatePostIndex !== -1)
          state.publication.posts.splice(updatePostIndex, 1, action.payload);
        return state;

      case ActionTypes.ADD_PUBLICATION:
        state.publications.push(action.payload);
        return state;
      case ActionTypes.FETCH_PUBLICATIONS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_PUBLICATIONS_SUCCESS:
        state.publications = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_PUBLICATIONS_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_PUBLICATION:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_PUBLICATION_SUCCESS:
        state.publication = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_PUBLICATION_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.DELETE_PUBLICATION:
        const deletePublicationIndex = state.publications.findIndex(
          (publication) => publication._id === action.payload
        );
        if (deletePublicationIndex !== -1)
          state.publications.splice(deletePublicationIndex, 1);
        return state;
      case ActionTypes.UPDATE_PUBLICATION:
        const updatePublicationIndex = state.publications.findIndex(
          (publication) => publication._id === action.payload._id
        );
        if (updatePublicationIndex !== -1)
          state.publications.splice(updatePublicationIndex, 1, action.payload);
        return state;
      default:
        return state;
    }
  }
);

export default postsReducers;
