import produce from "immer";
import { ITopic } from "../../types";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";

export const initialTopic: ITopic = {
  _id: "",
  name: "",
};

export interface ITopicsState {
  topics: ITopic[];
  loading: boolean;
  error: string;
}

const initialTopicsState: ITopicsState = {
  topics: [],
  loading: false,
  error: "",
};

const topicsReducers = (
  state: ITopicsState = initialTopicsState,
  action: Action
): ITopicsState => {
  switch (action.type) {
    case ActionTypes.LOADING_TOPICS:
      state.loading = true;
      state.error = "";
      return state;
    case ActionTypes.FETCH_TOPICS:
      state.topics = action.payload;
      state.loading = false;
      return state;
    case ActionTypes.ERROR_TOPICS:
      state.loading = false;
      state.error = action.payload;
      return state;
    default:
      return state;
  }
};

export default produce(topicsReducers);
