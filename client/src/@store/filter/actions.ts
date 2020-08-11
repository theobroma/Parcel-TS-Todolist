import { SET_FILTER } from './constants';

export const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    payload: filter,
  } as const;
};

export type FilterAction = ReturnType<typeof setFilter>;
