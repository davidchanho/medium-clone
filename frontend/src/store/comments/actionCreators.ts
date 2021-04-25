import { Dispatch } from "react";
import db from "../api";
import { ActionTypes } from "../actionTypes";
import { Action } from "../actions";
import { IComment } from "../../types/comment";

export const getComments = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_COMMENTS });

  try {
    const data = await db.getComments();
    dispatch({
      type: ActionTypes.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_COMMENTS_FAIL,
      payload: err,
    });
  }
};

export const getComment = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.FETCH_COMMENT });

  try {
    const data = await db.getComment(_id);
    dispatch({
      type: ActionTypes.FETCH_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_COMMENT_FAIL,
      payload: err,
    });
  }
};

export const addComment = (comment: IComment) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.addComment(comment);
    dispatch({ type: ActionTypes.ADD_COMMENT, payload: comment });
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.deleteComment(_id);
    dispatch({
      type: ActionTypes.DELETE_COMMENT,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateComment = (comment: IComment) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.updateComment(comment);
    dispatch({
      type: ActionTypes.UPDATE_COMMENT,
      payload: comment,
    });
  } catch (err) {
    console.log(err);
  }
};
