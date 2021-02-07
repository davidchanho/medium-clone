import { Dispatch } from "redux";
import db from "../../api";
import { IUser } from "../../types";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";


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

export const addUser = (publication: IUser) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.addUser(publication);
    dispatch({ type: ActionTypes.ADD_USER, payload: publication });
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

export const updateUser = (publication: IUser) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    db.updateUser(publication);
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: publication,
    });
  } catch (err) {
    console.log(err);
  }
};