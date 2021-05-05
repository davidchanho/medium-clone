import produce from "immer";
import { IPublication } from "../../types/publication";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";

export const initialPublication: IPublication = {
  _id: "",
  name: "",
  icon: "",
  topic: "",
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
      case ActionTypes.FETCH_PUBLICATIONS:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_PUBLICATIONS_SUCCESS:
        state.publications = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_PUBLICATIONS_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionTypes.FETCH_PUBLICATION:
        state.loading = true;
        state.error = "";
        return state;
      case ActionTypes.FETCH_PUBLICATION_SUCCESS:
        state.publication = action.payload;
        state.loading = false;
        return state;
      case ActionTypes.FETCH_PUBLICATION_FAIL:
        state.loading = false;
        state.error = action.payload;
        return state;
      default:
        return state;
    }
  }
);

export default publicationsReducers;
