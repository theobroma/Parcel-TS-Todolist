import { RootState } from '..';

export const todosSelector = (state: RootState) => {
  return state.todos;
};
