import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type TodoActionType = ActionType<typeof actions>;
