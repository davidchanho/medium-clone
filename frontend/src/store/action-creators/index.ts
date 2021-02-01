import { Dispatch } from "redux";
import db from "../../api";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { IPost, IPublication } from "../reducers/posts";

export const fetchPosts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_POSTS });

  try {
    const data = await db.fetchPosts();
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

export const fetchPost = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.FETCH_POST });

  try {
    const data = await db.fetchPost(_id);
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

export const fetchPublications = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_PUBLICATIONS });

  try {
    const data = await db.fetchPublications();
    dispatch({
      type: ActionTypes.FETCH_PUBLICATIONS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_PUBLICATIONS_FAIL,
      payload: err,
    });
  }
};

export const fetchPublication = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.FETCH_PUBLICATION });

  try {
    const data = await db.fetchPublication(_id);
    dispatch({
      type: ActionTypes.FETCH_PUBLICATION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_PUBLICATION_FAIL,
      payload: err,
    });
  }
};

export const addPublication = (publication: IPublication) => async (dispatch: Dispatch<Action>) => {
  try {
    db.addPublication(publication);
    dispatch({ type: ActionTypes.ADD_PUBLICATION, payload: publication });
  } catch (err) {
    console.log(err);
  }
};

export const deletePublication = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.deletePublication(_id);
    dispatch({
      type: ActionTypes.DELETE_PUBLICATION,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePublication = (publication: IPublication) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.updatePublication(publication);
    dispatch({
      type: ActionTypes.UPDATE_PUBLICATION,
      payload: publication,
    });
  } catch (err) {
    console.log(err);
  }
};
