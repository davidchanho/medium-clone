import produce from "immer";
import { IUser } from "../../types";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";

export const initialUser: IUser = {
  _id: "",
  name: "",
  avatar: "",
  photo: "",
  email: "",
  about: "",
  following: {
    users: [],
    publications: [],
  },
  bookmarks: [],
  posts: [],
  comments: [],
};

export interface IUsersState {
  users: IUser[];
  user: IUser;
  loading: boolean;
  error: string;
}

const initialUsersState: IUsersState = {
  users: [],
  user: initialUser,
  loading: false,
  error: "",
};

const usersReducers = produce(
  (state: IUsersState = initialUsersState, action: Action): IUsersState => {
    switch (action.type) {
      case ActionTypes.ADD_USER:
        state.users.push(action.payload);
        return state;
      case ActionTypes.FETCH_USERS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_USERS_SUCCESS:
        state.users = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_USERS_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_USER:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_USER_SUCCESS:
        state.user = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_USER_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.DELETE_USER:
        const deleteUserIndex = state.users.findIndex(
          (user) => user._id === action.payload
        );
        if (deleteUserIndex !== -1) state.users.splice(deleteUserIndex, 1);
        return state;
      case ActionTypes.UPDATE_USER:
        const updateUserIndex = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        if (updateUserIndex !== -1)
          state.users.splice(updateUserIndex, 1, action.payload);
        return state;
      case ActionTypes.BOOKMARK_POST:
        state.user.bookmarks.push(action.payload);
        state.loading = false;
        state.error = "";
        return state;
      default:
        return state;
    }
  }
);

export default usersReducers;
