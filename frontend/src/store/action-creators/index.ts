import { Dispatch } from "redux";
import db from "../../api";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { IPost } from "../reducers/posts";

export const fetchPosts = () => async (dispatch: Dispatch<Action>) => {
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

export const addPost = (post: IPost) => ({
  type: ActionTypes.ADD_POST,
  payload: post,
});
