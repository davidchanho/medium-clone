import { Dispatch } from "redux";
import db from "../api";
import { IPost } from "../posts/types";
import { ActionTypes } from "../actionTypes";
import { Action } from "../actions";
import { IUser } from "./types";

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_USERS });

  try {
    const data = await db.getUsers();
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

export const getUser = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionTypes.FETCH_USER });

  try {
    const data = await db.getUser(_id);
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

export const addUser = (user: IUser) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.addUser(user);
    dispatch({ type: ActionTypes.ADD_USER, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.deleteUser(_id);
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
    db.updateUser(user);
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