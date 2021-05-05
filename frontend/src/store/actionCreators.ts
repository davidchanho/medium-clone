import { Dispatch } from "react";
import { Action, ActionTypes } from ".";
import { IComment, IPost, IUser } from "../types";
import API from "./api";

export const getComments = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_COMMENTS });

  try {
    const data = await API.getComments();
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
    const data = await API.getComment(_id);
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
    API.addComment(comment);
    dispatch({ type: ActionTypes.ADD_COMMENT, payload: comment });
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.deleteComment(_id);
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
    API.updateComment(comment);
    dispatch({
      type: ActionTypes.UPDATE_COMMENT,
      payload: comment,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_POSTS });
  try {
    const data = await API.getPosts();

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
    const data = await API.getPost(_id);

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
    API.addPost(post);

    dispatch({ type: ActionTypes.ADD_POST, payload: post });
  } catch (err) {
    console.log(err);
  }
};

export const dismissPost = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    dispatch({
      type: ActionTypes.DISMISS_POST,
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
    API.updatePost(post);

    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: post,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPublications = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_PUBLICATIONS });

  try {
    const data = await API.getPublications();
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

export const getPublication = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.FETCH_PUBLICATION });

  try {
    const data = await API.getPublication(_id);
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

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_USERS });

  try {
    const data = await API.getUsers();
    dispatch({
      type: ActionTypes.FETCH_USERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_USERS_FAIL,
      payload: err,
    });
  }
};

export const getUser = (_id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_USER });

  try {
    const data = await API.getUser(_id);
    dispatch({
      type: ActionTypes.FETCH_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_USER_FAIL,
      payload: err,
    });
  }
};

export const addUser = (user: IUser) => async (dispatch: Dispatch<Action>) => {
  try {
    API.addUser(user);
    dispatch({ type: ActionTypes.ADD_USER, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.deleteUser(_id);
    dispatch({
      type: ActionTypes.DELETE_USER,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (user: IUser) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.updateUser(user);
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const bookmarkPost = (post: IPost) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    dispatch({
      type: ActionTypes.BOOKMARK_POST,
      payload: post,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTopics = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_TOPICS });

  try {
    const data = await API.getTopics();
    dispatch({
      type: ActionTypes.FETCH_TOPICS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FETCH_TOPICS_FAIL,
      payload: err,
    });
  }
};
