import { Action } from 'redux';
export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';

export const ADD_TODO = '@@todos/ADD_TODO';
export const REMOVE_TODO = '@@todos/REMOVE_TODO';
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO';
export const TOGGLE_ALL_TODO = '@@todos/TOGGLE_ALL_TODO';
export const TODOS_REMOVE_COMPLETED = '@@todos/TODOS_REMOVE_COMPLETED';

export const SET_FILTER = '@@filter/SET_FILTER';

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const addTodo = (todo: any) => {
  // console.log(todo);
  // return { type: ADD_TODO + REQUEST, payload: todo };
  return typedAction(ADD_TODO + REQUEST, todo);
};

export const handleTodoRemove = (id: string) => {
  // console.log(id);
  // return { type: REMOVE_TODO + REQUEST, payload: id };
  return typedAction(REMOVE_TODO + REQUEST, id);
};

export const handleTodoToggle = (id: string) => {
  // console.log(id);
  // return { type: TOGGLE_TODO + REQUEST, payload: { id } };
  return typedAction(TOGGLE_TODO + REQUEST, id);
};

export const handleTodoToggleAll = () => {
  // return { type: TOGGLE_ALL_TODO + REQUEST };
  return typedAction(TOGGLE_ALL_TODO);
};

// export const removeCompleted = () => ({
//   type: TODOS_REMOVE_COMPLETED + REQUEST,
// });

export const removeCompleted = () => {
  return typedAction(TODOS_REMOVE_COMPLETED);
};

export type TodosAction = ReturnType<
  | typeof addTodo
  | typeof handleTodoRemove
  | typeof handleTodoToggle
  | typeof handleTodoToggleAll
  | typeof removeCompleted
>;

export const setFilter = (filter: any) => {
  // console.log(filter);
  // return {
  //   type: SET_FILTER,
  //   payload: filter,
  // };
  return typedAction(SET_FILTER, filter);
};

export type FilterAction = ReturnType<typeof setFilter>;
