import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export interface TodoType {
  _id: string;
  text: string;
  completed: boolean;
}

export type TodoListType = {
  data: TodoType[];
};

export type TodoActionType = ActionType<typeof actions>;
export type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';
