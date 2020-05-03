import { createReducer } from 'typesafe-actions';
import * as types from '../actions';
import { FilterAction } from '../actions';

const initialState = 'SHOW_ALL' as string;

export type FilterStateType = typeof initialState;

// filter reducer
const filter = (
  state = initialState,
  action: FilterAction,
): FilterStateType => {
  if (action.type === types.SET_FILTER) {
    return action.payload;
  }
  return state;
};

export default filter;
