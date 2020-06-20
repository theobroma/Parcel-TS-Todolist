import { createReducer } from 'typesafe-actions';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
} from './constants';

import { TodoListType, TodoActionType } from './types';

const initialState: TodoListType = {
  data: [],
};

const todosReducer = createReducer<TodoListType, TodoActionType>(initialState, {
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
    return {
      data,
    };
  },
  [REMOVE_TODO]: (state, { payload: id }) => {
    return {
      ...state,
      data: state.data.filter((todo: any) => todo._id !== id),
    };
  },
  [TOGGLE_ALL_TODO]: (state, { payload: bool }) => {
    const data = state.data.map((todo) => {
      return { ...todo, completed: bool };
    });
    return {
      data,
    };
  },
  [REMOVE_COMPLETED_TODOS]: (state) => {
    return {
      ...state,
      data: state.data.filter((todo: any) => !todo.completed),
    };
  },
});

export default todosReducer;
