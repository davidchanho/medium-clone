import produce from "immer";
import { IComment } from "./types";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const initialComment: IComment = {
  _id: "",
  postId: "",
  userId: "",
  body: "",
  date: "",
};

export interface ICommentsState {
  comments: IComment[];
  comment: IComment;
  loading: boolean;
  error: string;
}

const initialCommentsState: ICommentsState = {
  comments: [],
  comment: initialComment,
  loading: false,
  error: "",
};

const commentsReducers = produce(
  (
    state: ICommentsState = initialCommentsState,
    action: Action
  ): ICommentsState => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENT:
        state.comments.push(action.payload);
        return state;
      case ActionTypes.FETCH_COMMENTS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_COMMENTS_SUCCESS:
        state.comments = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_COMMENTS_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_COMMENT:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_COMMENT_SUCCESS:
        state.comment = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_COMMENT_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.DELETE_COMMENT:
        const deleteCommentIndex = state.comments.findIndex(
          (comment) => comment._id === action.payload
        );
        if (deleteCommentIndex !== -1)
          state.comments.splice(deleteCommentIndex, 1);
        return state;
      case ActionTypes.UPDATE_COMMENT:
        const updateCommentIndex = state.comments.findIndex(
          (comment) => comment._id === action.payload._id
        );
        if (updateCommentIndex !== -1)
          state.comments.splice(updateCommentIndex, 1, action.payload);
        return state;
      default:
        return state;
    }
  }
);

export default commentsReducers;
