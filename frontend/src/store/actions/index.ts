import { ActionTypes } from "../action-types";
import { IPost } from "../reducers/posts";

interface FetchPostsAction {
  type: ActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: ActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

interface FetchPostsFailAction {
  type: ActionTypes.FETCH_POSTS_FAIL;
  payload: string;
}

interface AddPostAction {
  type: ActionTypes.ADD_POST;
  payload: IPost;
}

export type Action =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailAction
  | AddPostAction;
