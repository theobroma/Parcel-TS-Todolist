// import { Action } from 'redux';
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
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
export const actions = { addTodo, toggleTodo, removeTodo };

// export const addTodo = (todo: any) => {
//   // console.log(todo);
//   return {
//     type: ADD_TODO,
//     todo,
//   } as const;
// };

// export const handleTodoRemove = (id: string) => {
//   // console.log(id);
//   return { type: REMOVE_TODO, id } as const;
// };

// export const handleTodoToggle = (id: string) => {
//   // console.log(id);
//   return { type: TOGGLE_TODO, id } as const;
// };

// export const handleTodoToggleAll = (bool: boolean) => {
//   // console.log(bool);
//   return { type: TOGGLE_ALL_TODO, bool } as const;
// };

// export const removeCompleted = () =>
//   ({
//     type: REMOVE_COMPLETED_TODOS,
//   } as const);

// export type TodosAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof handleTodoRemove>
//   | ReturnType<typeof handleTodoToggle>
//   | ReturnType<typeof handleTodoToggleAll>
//   | ReturnType<typeof removeCompleted>;

// export const setFilter = (filter: any) => {
//   // console.log(filter);
//   return {
//     type: SET_FILTER,
//     payload: filter,
//   } as const;
// };

// export type FilterAction = ReturnType<typeof setFilter>;
