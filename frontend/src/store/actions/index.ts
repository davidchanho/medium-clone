import { ActionTypes } from "../action-types";
import { IPost, IPublication } from "../reducers/posts";

// Posts
interface GetPostsAction {
  type: ActionTypes.FETCH_POSTS;
}

interface GetPostsSuccessAction {
  type: ActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

interface GetPostsFailAction {
  type: ActionTypes.FETCH_POSTS_FAIL;
  payload: string;
}

interface GetPostAction {
  type: ActionTypes.FETCH_POST;
}

interface GetPostSuccessAction {
  type: ActionTypes.FETCH_POST_SUCCESS;
  payload: IPost;
}

interface GetPostFailAction {
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
interface GetPublicationsAction {
  type: ActionTypes.FETCH_PUBLICATIONS;
}

interface GetPublicationsSuccessAction {
  type: ActionTypes.FETCH_PUBLICATIONS_SUCCESS;
  payload: IPublication[];
}

interface GetPublicationsFailAction {
  type: ActionTypes.FETCH_PUBLICATIONS_FAIL;
  payload: string;
}

interface GetPublicationAction {
  type: ActionTypes.FETCH_PUBLICATION;
}

interface GetPublicationSuccessAction {
  type: ActionTypes.FETCH_PUBLICATION_SUCCESS;
  payload: IPublication;
}

interface GetPublicationFailAction {
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
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailAction
  | GetPostAction
  | GetPostSuccessAction
  | GetPostFailAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPublicationsAction
  | GetPublicationsSuccessAction
  | GetPublicationsFailAction
  | GetPublicationAction
  | GetPublicationSuccessAction
  | GetPublicationFailAction
  | AddPublicationAction
  | DeletePublicationAction
  | UpdatePublicationAction;
