// import { Action } from 'redux';

export const ADD_TODO = '@@todos/ADD_TODO';
export const REMOVE_TODO = '@@todos/REMOVE_TODO';
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO';
export const TOGGLE_ALL_TODO = '@@todos/TOGGLE_ALL_TODO';
export const TODOS_REMOVE_COMPLETED = '@@todos/TODOS_REMOVE_COMPLETED';

export const SET_FILTER = '@@filter/SET_FILTER';

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
