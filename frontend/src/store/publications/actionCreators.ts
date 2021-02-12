import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";
import db from "../api";

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
