import { ActionTypes } from "../action-types";
import { IPost, IPublication } from "../reducers/posts";

// Posts
interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: ActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

interface FetchPostsFailAction {
  type: ActionTypes.FETCH_POSTS_FAIL;
  payload: string;
}

interface FetchPostAction {
  type: ActionTypes.FETCH_POST;
}

interface FetchPostSuccessAction {
  type: ActionTypes.FETCH_POST_SUCCESS;
  payload: IPost;
}

interface FetchPostFailAction {
  type: ActionTypes.FETCH_POST_FAIL;
  payload: string;
}

interface AddPostAction {
  type: ActionTypes.ADD_POST;
  payload: IPost;
}

interface DeletePostAction {
  type: ActionTypes.DELETE_POST;
  payload: string;
}

interface UpdatePostAction {
  type: ActionTypes.UPDATE_POST;
  payload: IPost;
}

// Publications
interface FetchPublicationsAction {
  type: ActionTypes.FETCH_PUBLICATIONS;
}

interface FetchPublicationsSuccessAction {
  type: ActionTypes.FETCH_PUBLICATIONS_SUCCESS;
  payload: IPublication[];
}

interface FetchPublicationsFailAction {
  type: ActionTypes.FETCH_PUBLICATIONS_FAIL;
  payload: string;
}

interface FetchPublicationAction {
  type: ActionTypes.FETCH_PUBLICATION;
}

interface FetchPublicationSuccessAction {
  type: ActionTypes.FETCH_PUBLICATION_SUCCESS;
  payload: IPublication;
}

interface FetchPublicationFailAction {
  type: ActionTypes.FETCH_PUBLICATION_FAIL;
  payload: string;
}

interface AddPublicationAction {
  type: ActionTypes.ADD_PUBLICATION;
  payload: IPublication;
}

interface DeletePublicationAction {
  type: ActionTypes.DELETE_PUBLICATION;
  payload: string;
}

interface UpdatePublicationAction {
  type: ActionTypes.UPDATE_PUBLICATION;
  payload: IPublication;
}

export type Action =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailAction
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostFailAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | FetchPublicationsAction
  | FetchPublicationsSuccessAction
  | FetchPublicationsFailAction
  | FetchPublicationAction
  | FetchPublicationSuccessAction
  | FetchPublicationFailAction
  | AddPublicationAction
  | DeletePublicationAction
  | UpdatePublicationAction
