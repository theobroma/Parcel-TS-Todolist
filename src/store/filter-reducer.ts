import { createReducer } from 'typesafe-actions';
import { SET_FILTER } from './constants';
import { FilterAction } from './actions';

const initialState = 'SHOW_ALL' as string;

export type FilterStateType = typeof initialState;

// filter reducer
const filter = (
  state = initialState,
  action: FilterAction,
): FilterStateType => {
  if (action.type === SET_FILTER) {
    return action.payload;
  }
  return state;
};

export default filter;
