import { IComment } from "../../types/comment";
import { ActionTypes } from "../actionTypes";

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

export type CommentsAction =
  | GetCommentsAction
  | GetCommentsSuccessAction
  | GetCommentsFailAction
  | GetCommentAction
  | GetCommentSuccessAction
  | GetCommentFailAction
  | AddCommentAction
  | DeleteCommentAction
  | UpdateCommentAction;
