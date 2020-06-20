import { createAction } from 'typesafe-actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
  SET_FILTER,
} from './constants';

// create action functions
export const addTodo = createAction(ADD_TODO)<string>();
export const handleTodoToggle = createAction(TOGGLE_TODO)<string>();
export const handleTodoRemove = createAction(REMOVE_TODO)<string>();
export const handleTodoToggleAll = createAction(TOGGLE_ALL_TODO)<boolean>();
export const removeCompleted = createAction(REMOVE_COMPLETED_TODOS)();
export const actions = {
  addTodo,
  handleTodoToggle,
  handleTodoRemove,
  handleTodoToggleAll,
  removeCompleted,
};

export const setFilter = (filter: any) => {
  return {
    type: SET_FILTER,
    payload: filter,
  } as const;
};

export type FilterAction = ReturnType<typeof setFilter>;
