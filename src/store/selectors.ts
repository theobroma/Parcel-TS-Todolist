import { RootState } from '../store/index';

export const todosSelector = (state: RootState) => {
  return state.todos;
};
export const filterSelector = (state: RootState) => {
  return state.filter;
};
