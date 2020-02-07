export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';

export const ADD_TODO = '@@todos/ADD_TODO';
export const REMOVE_TODO = '@@todos/REMOVE_TODO';
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO';
export const TOGGLE_ALL_TODO = '@@todos/TOGGLE_ALL_TODO';
export const TODOS_REMOVE_COMPLETED = '@@todos/TODOS_REMOVE_COMPLETED';

export const SET_FILTER = '@@filter/SET_FILTER';

export const addTodo = (todo: any) => {
  // console.log(todo);
  return { type: ADD_TODO + REQUEST, payload: todo };
};

export const handleTodoRemove = (_id: string) => {
  // console.log(id);
  return { type: REMOVE_TODO + REQUEST, payload: _id };
};

export const handleTodoToggle = (id: string) => {
  // console.log(id);
  return { type: TOGGLE_TODO + REQUEST, payload: { id } };
};

export const handleTodoToggleAll = () => {
  return { type: TOGGLE_ALL_TODO + REQUEST };
};

export const removeCompleted = () => ({ type: TODOS_REMOVE_COMPLETED + REQUEST });

export const setFilter = (filter: any) => {
  return {
    type: SET_FILTER,
    filter,
  };
};
