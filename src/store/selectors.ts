import { RootState } from '../store/index';

export const todosSelector = (state: RootState) => {
  console.log('todosSelector');
  return state.todos;
};
export const filterSelector = (state: RootState) => {
  console.log('filterSelector');
  return state.filter;
};
