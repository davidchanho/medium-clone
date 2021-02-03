import { Dispatch } from "redux";
import db from "../../api";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { IPublication } from "../reducers/publications";

export const getPublications = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_PUBLICATIONS });

  try {
    const data = await db.getPublications();
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
    const data = await db.getPublication(_id);
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

export const addPublication = (publication: IPublication) => async (
  dispatch: Dispatch<Action>
) => {
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
