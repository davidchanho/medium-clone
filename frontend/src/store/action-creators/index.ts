import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { IPost } from "../reducers/posts";

const postsUrl = "/api/posts/";

export const fetchPosts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.FETCH_POSTS });

  try {
    const { data } = await axios.get<IPost[]>(postsUrl);
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
    const { data } = await axios.get<IPost>(postsUrl + _id);
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
  const { title, body } = post;
  try {
    axios.post<any>(postsUrl, { title, body });
    dispatch({ type: ActionTypes.ADD_POST, payload: post });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (_id: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    axios.delete<string>(postsUrl + _id);
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
    axios.delete<string>(postsUrl + post._id);
    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: post,
    });
  } catch (err) {
    console.log(err);
  }
};
