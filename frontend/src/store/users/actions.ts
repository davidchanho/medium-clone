import { ActionTypes } from "../actionTypes";
import { IPost } from "../posts/types";
import { IUser } from "./types";

export interface GetUsersAction {
  type: ActionTypes.FETCH_USERS;
}

export interface GetUsersSuccessAction {
  type: ActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface GetUsersFailAction {
  type: ActionTypes.FETCH_USERS_FAIL;
  payload: string;
}

export interface GetUserAction {
  type: ActionTypes.FETCH_USER;
}

export interface GetUserSuccessAction {
  type: ActionTypes.FETCH_USER_SUCCESS;
  payload: IUser;
}

export interface GetUserFailAction {
  type: ActionTypes.FETCH_USER_FAIL;
  payload: string;
}

export interface AddUserAction {
  type: ActionTypes.ADD_USER;
  payload: IUser;
}

export interface DeleteUserAction {
  type: ActionTypes.DELETE_USER;
  payload: string;
}

export interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: IUser;
}

export interface BookmarkPostAction {
  type: ActionTypes.BOOKMARK_POST;
  payload: IPost;
}

export type UserAction =
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersFailAction
  | GetUserAction
  | GetUserSuccessAction
  | GetUserFailAction
  | AddUserAction
  | DeleteUserAction
  | UpdateUserAction
  | BookmarkPostAction;
