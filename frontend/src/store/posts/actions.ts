import { IPost } from "./types";
import { ActionTypes } from "../action-types";

export interface GetPostsAction {
  type: ActionTypes.FETCH_POSTS;
}

export interface GetPostsSuccessAction {
  type: ActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

export interface GetPostsFailAction {
  type: ActionTypes.FETCH_POSTS_FAIL;
  payload: string;
}

export interface GetPostAction {
  type: ActionTypes.FETCH_POST;
}

export interface GetPostSuccessAction {
  type: ActionTypes.FETCH_POST_SUCCESS;
  payload: IPost;
}

export interface GetPostFailAction {
  type: ActionTypes.FETCH_POST_FAIL;
  payload: string;
}

export interface AddPostAction {
  type: ActionTypes.ADD_POST;
  payload: IPost;
}

export interface DeletePostAction {
  type: ActionTypes.DELETE_POST;
  payload: string;
}

export interface UpdatePostAction {
  type: ActionTypes.UPDATE_POST;
  payload: IPost;
}

export type PostAction =
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailAction
  | GetPostAction
  | GetPostSuccessAction
  | GetPostFailAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
