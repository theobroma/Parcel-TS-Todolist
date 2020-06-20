// import { createReducer } from 'typesafe-actions';
import { SET_FILTER } from './constants';
import { FilterAction } from './actions';
// import { FilterType } from './types';

const initialState = 'SHOW_ALL';

const filter = (state = initialState, action: FilterAction): string => {
  if (action.type === SET_FILTER) {
    return action.payload;
  }
  return state;
};

export default filter;
