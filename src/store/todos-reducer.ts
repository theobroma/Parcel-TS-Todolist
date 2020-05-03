import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import * as types from '../actions';
import { TodosAction } from '../actions';
import { ITodo } from '../interfaces';

// type TodosState = {
//   data: ITodo[];
//   pending: boolean;
//   errorMessage: string;
// };

// const initialState: TodosState = {
//   data: [],
//   pending: false,
//   errorMessage: '',
// };

const initialState = {
  data: [] as ITodo[],
  pending: false,
  errorMessage: '',
};

export type TodosStateType = typeof initialState;

const todos = produce((draft, action: TodosAction): TodosStateType => {
  // console.log(action.payload);
  switch (action.type) {
    case types.ADD_TODO: {
      const value = {
        _id: uuidv4(),
        completed: false,
        text: action.todo,
      };
      draft.data.push(value);
      return draft;
    }

    case types.REMOVE_TODO: {
      draft.data = draft.data.filter((todo: any) => todo._id !== action.id);
      return draft;
    }

    case types.TOGGLE_TODO: {
      draft.data = draft.data.map((todo: any) => {
        if (todo._id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return draft;
    }

    case types.TOGGLE_ALL_TODO: {
      draft.data = draft.data.map((todo: any) => {
        return { ...todo, completed: action.bool };
      });
      return draft;
    }

    case types.TODOS_REMOVE_COMPLETED: {
      draft.data = draft.data.filter((todo: any) => !todo.completed);
      return draft;
    }

    // case EDIT_TODO_FULFILLED:
    //   return {
    //     ...state,
    //     data: state.data.map((todo: any) => {
    //       if (todo._id === action.id) {
    //         return { ...todo, text: action.text };
    //       }
    //       return todo;
    //     })
    //   };
    default:
      return draft;
  }
}, initialState);
export default todos;
