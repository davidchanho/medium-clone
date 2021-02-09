import { nanoid } from "nanoid";
import produce from "immer";
import { IPublication } from "../../types";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const initialPublication: IPublication = {
  _id: nanoid(),
  name: "",
  icon: '',
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
      case ActionTypes.ADD_PUBLICATION:
        state.publications.push(action.payload);
        return state;
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
      case ActionTypes.DELETE_PUBLICATION:
        const deletePublicationIndex = state.publications.findIndex(
          (publication) => publication._id === action.payload
        );
        if (deletePublicationIndex !== -1)
          state.publications.splice(deletePublicationIndex, 1);
        return state;
      case ActionTypes.UPDATE_PUBLICATION:
        const updatePublicationIndex = state.publications.findIndex(
          (publication) => publication._id === action.payload._id
        );
        if (updatePublicationIndex !== -1)
          state.publications.splice(updatePublicationIndex, 1, action.payload);
        return state;
      default:
        return state;
    }
  }
);

export default publicationsReducers;
