import { combineReducers } from 'redux';
import produce from 'immer';
import uuidv4 from 'uuid/v4';

import * as types from '../actions';

// filter reducer
const filter = (state = 'SHOW_ALL', action: any) => {
  if (action.type === types.SET_FILTER) {
    return action.filter;
  }
  return state;
};

export default filter;
