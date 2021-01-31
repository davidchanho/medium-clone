import { ActionTypes } from "../action-types";
import { IPost } from "../reducers/posts";

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

export type Action =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailAction
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostFailAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction;
