import * as types from '../actions';
import { FilterAction } from '../actions';

type FilterState = string;

const initialState: FilterState = 'SHOW_ALL';

// filter reducer
const filter = (state = initialState, action: FilterAction): FilterState => {
  if (action.type === types.SET_FILTER) {
    return action.payload;
  }
  return state;
};

export default filter;
