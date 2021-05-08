import produce from "immer";
import { IPublication } from "../../types";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";

export const initialPublication: IPublication = {
  _id: "",
  name: "",
  icon: "",
  topic: { _id: "", name: "" },
};

export interface IPublicationsState {
  publications: IPublication[];
  publication: IPublication;
  loading: boolean;
  error: string;
}

const initialPublicationsState: IPublicationsState = {
  publications: [],
  publication: initialPublication,
  loading: false,
  error: "",
};

const publicationsReducers = produce(
  (
    state: IPublicationsState = initialPublicationsState,
    action: Action
  ): IPublicationsState => {
    switch (action.type) {
      case ActionTypes.LOADING_PUBLICATIONS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.ERROR_PUBLICATIONS:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_PUBLICATIONS:
        state.publications = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_PUBLICATION:
        state.publication = action.payload;
        state.loading = false;
        return state;
      default:
        return state;
    }
  }
);

export default publicationsReducers;
