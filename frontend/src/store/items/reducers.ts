import produce from "immer";
import { IItem } from "../../types";
import { Action } from "../actions";
import { ActionTypes } from "../actionTypes";

export const initialItem: IItem = {
  _id: "",
  postId: "",
  userId: "",
  body: "",
  date: "",
};

export interface IItemsState {
  items: IItem[];
  item: IItem;
  loading: boolean;
  error: string;
}

const initialItemsState: IItemsState = {
  items: [],
  item: initialItem,
  loading: false,
  error: "",
};

export function createFilteredReducer(reducerFunction: any, reducerPredicate: any) {
  return (state: IItemsState, action: Action) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer =
      reducerPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
  };
}

const itemsReducers = produce(
  (state: IItemsState = initialItemsState, action: Action): IItemsState => {
    switch (action.type) {
      case ActionTypes.LOADING_ITEMS:
        state.loading = true;
        state.error = "";
        return state;
    
      case ActionTypes.ERROR_ITEMS:
        state.loading = false;
        state.error = action.payload;
        return state;
      default:
        return state;
    }
  }
);

export default itemsReducers;
