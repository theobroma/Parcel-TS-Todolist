import { createReducer } from 'typesafe-actions';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
  EDIT_TODO,
} from './constants';

import { TodoListType, TodoActionType, TodoType } from './types';

export const todosInitialState: TodoListType = {
  data: [],
  editingTodoId: null,
  editingTodoTitle: '',
};

const todosReducer = createReducer<TodoListType, TodoActionType>(
  todosInitialState,
  {
    [ADD_TODO]: (state, { payload: text }) => {
      return {
        ...state,
        data: [
          {
            _id: uuidv4(),
            text,
            completed: false,
          },
          ...state.data,
        ],
      };
    },
    [TOGGLE_TODO]: (state, { payload: id }) => {
      const data = state.data.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      return { ...state, data };
    },
    [REMOVE_TODO]: (state, { payload: id }) => {
      return {
        ...state,
        data: state.data.filter((todo: TodoType) => todo._id !== id),
      };
    },
    [TOGGLE_ALL_TODO]: (state, { payload: bool }) => {
      const data = state.data.map((todo) => {
        return { ...todo, completed: bool };
      });
      return { ...state, data };
    },
    [REMOVE_COMPLETED_TODOS]: (state) => {
      return {
        ...state,
        data: state.data.filter((todo: TodoType) => !todo.completed),
      };
    },
    [EDIT_TODO]: (state, { payload: id }) => {
      return {
        ...state,
        editingTodoId: id,
        editingTodoTitle: id,
      };
    },
  },
);

export default todosReducer;
