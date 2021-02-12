import { IPublication } from "./types";
import { ActionTypes } from "../actionTypes";

export interface GetPublicationsAction {
  type: ActionTypes.FETCH_PUBLICATIONS;
}

export interface GetPublicationsSuccessAction {
  type: ActionTypes.FETCH_PUBLICATIONS_SUCCESS;
  payload: IPublication[];
}

export interface GetPublicationsFailAction {
  type: ActionTypes.FETCH_PUBLICATIONS_FAIL;
  payload: string;
}

export interface GetPublicationAction {
  type: ActionTypes.FETCH_PUBLICATION;
}

export interface GetPublicationSuccessAction {
  type: ActionTypes.FETCH_PUBLICATION_SUCCESS;
  payload: IPublication;
}

export interface GetPublicationFailAction {
  type: ActionTypes.FETCH_PUBLICATION_FAIL;
  payload: string;
}

export type PublicationAction =
  | GetPublicationsAction
  | GetPublicationsSuccessAction
  | GetPublicationsFailAction
  | GetPublicationAction
  | GetPublicationSuccessAction
  | GetPublicationFailAction