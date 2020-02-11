import produce from 'immer';
import uuidv4 from 'uuid/v4';

import * as types from '../actions';
import { TodosAction } from '../actions';
import { ITodo } from '../interfaces';

type TodosState = {
  data: ITodo[];
  pending: boolean;
  errorMessage: string;
};

const initialState: TodosState = {
  data: [],
  pending: false,
  errorMessage: '',
};

const todos = produce((draft, action: TodosAction): TodosState => {
  // console.log(action.payload);
  switch (action.type) {
    case types.ADD_TODO + types.REQUEST: {
      const value = {
        _id: uuidv4(),
        completed: false,
        text: action.payload,
      };
      draft.data.push(value);
      return draft;
    }

    case types.REMOVE_TODO + types.REQUEST: {
      draft.data = draft.data.filter(
        (todo: any) => todo._id !== action.payload,
      );
      return draft;
    }

    case types.TOGGLE_TODO + types.REQUEST: {
      draft.data = draft.data.map((todo: any) => {
        if (todo._id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return draft;
    }

    case types.TOGGLE_ALL_TODO + types.REQUEST: {
      draft.data = draft.data.map((todo: any) => {
        return { ...todo, completed: action.payload };
      });
      return draft;
    }

    case types.TODOS_REMOVE_COMPLETED + types.REQUEST: {
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
