import { createReducer } from 'typesafe-actions';
// import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
  REMOVE_COMPLETED_TODOS,
  SET_FILTER,
} from './constants';

import { TodoListType, TodoActionType } from './types';
import { ITodo } from '../interfaces';

// const initialState = {
//   data: [] as ITodo[],
//   // pending: false,
//   // errorMessage: '',
// };

// export type TodosStateType = typeof initialState;

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
    return state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
  },
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});

// const todos = produce((draft, action: TodosAction): TodosStateType => {
//   // console.log(action.payload);
//   switch (action.type) {
//     case types.ADD_TODO: {
//       const value = {
//         _id: uuidv4(),
//         completed: false,
//         text: action.todo,
//       };
//       draft.data.push(value);
//       return draft;
//     }

//     case types.REMOVE_TODO: {
//       draft.data = draft.data.filter((todo: any) => todo._id !== action.id);
//       return draft;
//     }

//     case types.TOGGLE_TODO: {
//       draft.data = draft.data.map((todo: any) => {
//         if (todo._id === action.id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       return draft;
//     }

//     case types.TOGGLE_ALL_TODO: {
//       draft.data = draft.data.map((todo: any) => {
//         return { ...todo, completed: action.bool };
//       });
//       return draft;
//     }

//     case types.TODOS_REMOVE_COMPLETED: {
//       draft.data = draft.data.filter((todo: any) => !todo.completed);
//       return draft;
//     }

//     // case EDIT_TODO_FULFILLED:
//     //   return {
//     //     ...state,
//     //     data: state.data.map((todo: any) => {
//     //       if (todo._id === action.id) {
//     //         return { ...todo, text: action.text };
//     //       }
//     //       return todo;
//     //     })
//     //   };
//     default:
//       return draft;
//   }
// }, initialState);

export default todosReducer;
