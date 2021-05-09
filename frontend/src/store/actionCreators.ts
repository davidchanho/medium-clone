import { Dispatch } from "react";
import { Action, ActionTypes } from ".";
import { IComment, IItem, IPost, IUser } from "../types";
import API from "./api";

export const getItems = (name: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.LOADING_ITEMS });

  try {
    const data = await API.getItems(name);
    dispatch({
      type: ActionTypes.FETCH_ITEMS,
      name,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_ITEMS,
      name,
      payload: err.message,
    });
  }
};

export const getItem = (_id: string, name: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.LOADING_ITEMS });

  try {
    const data = await API.getItem(_id, name);
    dispatch({
      type: ActionTypes.FETCH_ITEM,
      name,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_ITEMS,
      name,
      payload: err.message,
    });
  }
};

export const addItem = (item: IItem, name: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.addItem(item, name);
    dispatch({ type: ActionTypes.ADD_ITEM, name, payload: item });
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = (_id: string, name: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.deleteItem(_id, name);
    dispatch({
      type: ActionTypes.DELETE_ITEM,
      name,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = (item: IItem, name: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.updateItem(item, name);
    dispatch({
      type: ActionTypes.UPDATE_ITEM,
      name,
      payload: item,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.LOADING_COMMENTS });

  try {
    const data = await API.getComments();
    dispatch({
      type: ActionTypes.FETCH_COMMENTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_COMMENTS,
      payload: err.message,
    });
  }
};

export const getComment = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.LOADING_COMMENTS });

  try {
    const data = await API.getComment(_id);
    dispatch({
      type: ActionTypes.FETCH_COMMENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_COMMENTS,
      payload: err.message,
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
  dispatch({ type: ActionTypes.LOADING_POSTS });
  try {
    const data = await API.getPosts();
    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_POSTS,
      payload: err.message,
    });
  }
};

export const getPost = (_id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.LOADING_POSTS });

  try {
    const data = await API.getPost(_id);

    dispatch({
      type: ActionTypes.FETCH_POST,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_POSTS,
      payload: err.message,
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

export const deletePost = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    API.deletePost(_id);

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
  dispatch({ type: ActionTypes.LOADING_PUBLICATIONS });

  try {
    const data = await API.getPublications();
    dispatch({
      type: ActionTypes.FETCH_PUBLICATIONS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_PUBLICATIONS,
      payload: err.message,
    });
  }
};

export const getPublication = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.LOADING_PUBLICATIONS });

  try {
    const data = await API.getPublication(_id);
    dispatch({
      type: ActionTypes.FETCH_PUBLICATION,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_PUBLICATIONS,
      payload: err.message,
    });
  }
};

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.LOADING_USERS });

  try {
    const data = await API.getUsers();
    dispatch({
      type: ActionTypes.FETCH_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_USERS,
      payload: err.message,
    });
  }
};

export const getUser = (_id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.LOADING_USERS });

  try {
    const data = await API.getUser(_id);
    dispatch({
      type: ActionTypes.FETCH_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_USERS,
      payload: err.message,
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
  dispatch({ type: ActionTypes.LOADING_TOPICS });

  try {
    const data = await API.getTopics();
    dispatch({
      type: ActionTypes.FETCH_TOPICS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.ERROR_TOPICS,
      payload: err.message,
    });
  }
};
