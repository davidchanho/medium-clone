import { ActionTypes } from ".";
import { IComment, IItem, IPost, IPublication, ITopic, IUser } from "../types";

export interface LoadingItemsAction {
  type: ActionTypes.LOADING_ITEMS;
}

export interface ErrorItemsAction {
  type: ActionTypes.ERROR_ITEMS;
  name: string;
  payload: string;
}

export interface FetchItemsAction {
  type: ActionTypes.FETCH_ITEMS;
  name: string;
  payload: IItem[];
}

export interface FetchItemAction {
  type: ActionTypes.FETCH_ITEM;
  name: string;
  payload: IItem;
}

export interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  name: string;
  payload: IItem;
}

export interface DeleteItemAction {
  type: ActionTypes.DELETE_ITEM;
  name: string;
  payload: string;
}

export interface UpdateItemAction {
  type: ActionTypes.UPDATE_ITEM;
  name: string;
  payload: IItem;
}

export interface LoadingCommentsAction {
  type: ActionTypes.LOADING_COMMENTS;
}

export interface ErrorCommentsAction {
  type: ActionTypes.ERROR_COMMENTS;
  payload: string;
}

export interface FetchCommentsAction {
  type: ActionTypes.FETCH_COMMENTS;
  payload: IComment[];
}

export interface FetchCommentAction {
  type: ActionTypes.FETCH_COMMENT;
  payload: IComment;
}

export interface AddCommentAction {
  type: ActionTypes.ADD_COMMENT;
  payload: IComment;
}

export interface DeleteCommentAction {
  type: ActionTypes.DELETE_COMMENT;
  payload: string;
}

export interface UpdateCommentAction {
  type: ActionTypes.UPDATE_COMMENT;
  payload: IComment;
}

export interface LoadingPostsAction {
  type: ActionTypes.LOADING_POSTS;
}

export interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS;
  payload: IPost[];
}

export interface ErrorPostsAction {
  type: ActionTypes.ERROR_POSTS;
  payload: string;
}

export interface FetchPostAction {
  type: ActionTypes.FETCH_POST;
  payload: IPost;
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

export interface LoadingPublicationsAction {
  type: ActionTypes.LOADING_PUBLICATIONS;
}

export interface FetchPublicationsAction {
  type: ActionTypes.FETCH_PUBLICATIONS;
  payload: IPublication[];
}

export interface ErrorPublicationsAction {
  type: ActionTypes.ERROR_PUBLICATIONS;
  payload: string;
}

export interface FetchPublicationAction {
  type: ActionTypes.FETCH_PUBLICATION;
  payload: IPublication;
}

export interface LoadingTopicsAction {
  type: ActionTypes.LOADING_TOPICS;
}

export interface FetchTopicsAction {
  type: ActionTypes.FETCH_TOPICS;
  payload: ITopic[];
}

export interface ErrorTopicsAction {
  type: ActionTypes.ERROR_TOPICS;
  payload: string;
}

export interface LoadingUsersAction {
  type: ActionTypes.LOADING_USERS;
}

export interface FetchUsersAction {
  type: ActionTypes.FETCH_USERS;
  payload: IUser[];
}

export interface ErrorUsersAction {
  type: ActionTypes.ERROR_USERS;
  payload: string;
}

export interface FetchUserAction {
  type: ActionTypes.FETCH_USER;
  payload: IUser;
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

export type Action =
  | FetchItemsAction
  | ErrorItemsAction
  | LoadingItemsAction
  | FetchItemAction
  | AddItemAction
  | DeleteItemAction
  | UpdateItemAction
  | FetchCommentsAction
  | ErrorCommentsAction
  | LoadingCommentsAction
  | FetchCommentAction
  | AddCommentAction
  | DeleteCommentAction
  | UpdateCommentAction
  | FetchPostsAction
  | ErrorPostsAction
  | LoadingPostsAction
  | FetchPostAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | FetchPublicationsAction
  | ErrorPublicationsAction
  | LoadingPublicationsAction
  | FetchPublicationAction
  | FetchTopicsAction
  | ErrorTopicsAction
  | LoadingTopicsAction
  | FetchUsersAction
  | ErrorUsersAction
  | LoadingUsersAction
  | FetchUserAction
  | AddUserAction
  | DeleteUserAction
  | UpdateUserAction
  | BookmarkPostAction;
