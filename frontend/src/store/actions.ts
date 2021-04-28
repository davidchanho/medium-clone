import { ActionTypes } from ".";
import { IComment, IPost, IPublication, ITopic, IUser } from "../types";

export interface GetCommentsAction {
  type: ActionTypes.FETCH_COMMENTS;
}

export interface GetCommentsSuccessAction {
  type: ActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: IComment[];
}

export interface GetCommentsFailAction {
  type: ActionTypes.FETCH_COMMENTS_FAIL;
  payload: string;
}

export interface GetCommentAction {
  type: ActionTypes.FETCH_COMMENT;
}

export interface GetCommentSuccessAction {
  type: ActionTypes.FETCH_COMMENT_SUCCESS;
  payload: IComment;
}

export interface GetCommentFailAction {
  type: ActionTypes.FETCH_COMMENT_FAIL;
  payload: string;
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

export interface GetPublicationsAction {
  type: ActionTypes.FETCH_PUBLICATIONS;
}

export interface GetPublicationsSuccessAction {
  type: ActionTypes.FETCH_PUBLICATIONS_SUCCESS;
  payload: IPublication[];
}

export interface GetPublicationsFailAction {
  type: ActionTypes.FETCH_PUBLICATIONS_FAIL;
  payload: string;
}

export interface GetPublicationAction {
  type: ActionTypes.FETCH_PUBLICATION;
}

export interface GetPublicationSuccessAction {
  type: ActionTypes.FETCH_PUBLICATION_SUCCESS;
  payload: IPublication;
}

export interface GetPublicationFailAction {
  type: ActionTypes.FETCH_PUBLICATION_FAIL;
  payload: string;
}

export interface GetTopicsAction {
  type: ActionTypes.FETCH_TOPICS;
}

export interface GetTopicsSuccessAction {
  type: ActionTypes.FETCH_TOPICS_SUCCESS;
  payload: ITopic[];
}

export interface GetTopicsFailAction {
  type: ActionTypes.FETCH_TOPICS_FAIL;
  payload: string;
}

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

export type Action =
  | GetCommentsAction
  | GetCommentsSuccessAction
  | GetCommentsFailAction
  | GetCommentAction
  | GetCommentSuccessAction
  | GetCommentFailAction
  | AddCommentAction
  | DeleteCommentAction
  | UpdateCommentAction
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
  | GetTopicsAction
  | GetTopicsSuccessAction
  | GetTopicsFailAction
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
