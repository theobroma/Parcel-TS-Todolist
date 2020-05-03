// import { Action } from 'redux';
import { createReducer } from 'typesafe-actions';

export const ADD_TODO = '@@todos/ADD_TODO' as const;
export const REMOVE_TODO = '@@todos/REMOVE_TODO' as const;
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO' as const;
export const TOGGLE_ALL_TODO = '@@todos/TOGGLE_ALL_TODO' as const;
export const TODOS_REMOVE_COMPLETED = '@@todos/TODOS_REMOVE_COMPLETED' as const;

export const SET_FILTER = '@@filter/SET_FILTER' as const;

export const addTodo = (todo: any) => {
  // console.log(todo);
  return {
    type: ADD_TODO,
    todo,
  } as const;
};

export const handleTodoRemove = (id: string) => {
  // console.log(id);
  return { type: REMOVE_TODO, id } as const;
};

export const handleTodoToggle = (id: string) => {
  // console.log(id);
  return { type: TOGGLE_TODO, id } as const;
};

export const handleTodoToggleAll = (bool: boolean) => {
  // console.log(bool);
  return { type: TOGGLE_ALL_TODO, bool } as const;
};

export const removeCompleted = () =>
  ({
    type: TODOS_REMOVE_COMPLETED,
  } as const);

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof handleTodoRemove>
  | ReturnType<typeof handleTodoToggle>
  | ReturnType<typeof handleTodoToggleAll>
  | ReturnType<typeof removeCompleted>;

export const setFilter = (filter: any) => {
  // console.log(filter);
  return {
    type: SET_FILTER,
    payload: filter,
  } as const;
};

export type FilterAction = ReturnType<typeof setFilter>;
