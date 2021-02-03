import { Dispatch } from "react";
import db from "../../api";
import { IPost } from "../../types";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_POSTS });

  try {
    const data = await db.getPosts();
    dispatch({
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_POSTS_FAIL,
      payload: err,
    });
  }
};

export const getPost = (_id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_POST });

  try {
    const data = await db.getPost(_id);
    dispatch({
      type: ActionTypes.FETCH_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_POST_FAIL,
      payload: err,
    });
  }
};

export const addPost = (post: IPost) => async (dispatch: Dispatch<Action>) => {
  try {
    db.addPost(post);
    dispatch({ type: ActionTypes.ADD_POST, payload: post });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.deletePost(_id);
    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (post: IPost) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.updatePost(post);
    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: post,
    });
  } catch (err) {
    console.log(err);
  }
};
