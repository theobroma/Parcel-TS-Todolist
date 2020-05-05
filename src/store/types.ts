import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

// export type TodoType = {
//   id: number;
//   text: string;
//   done: boolean;
// };

export interface TodoType {
  _id: string;
  text: string;
  completed: boolean;
}

export type TodoListType = {
  data: TodoType[];
};

export type TodoActionType = ActionType<typeof actions>;
