import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../@store/actions';
import { todosSelector, filterSelector } from '../@store/selectors';
import TodoItem from './TodoItem';
import { TodoType } from '../@store/types';

interface Props {
  activeTodoCount: number;
}

const List: React.FC<Props> = React.memo(({ activeTodoCount }) => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector).data;
  const filter = useSelector(filterSelector);

  const _handleTodoToggleAll = () => {
    const bool = activeTodoCount !== 0;
    dispatch(actions.handleTodoToggleAll(bool));
  };

  const renderToggleAll = () => {
    if (todos.length) {
      return (
        <>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={_handleTodoToggleAll}
            checked={activeTodoCount === 0}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
      );
    }
    return null;
  };

  const _filterTodos = (todo: TodoType) =>
    filter === 'SHOW_ALL' ||
    (filter === 'SHOW_ACTIVE' && !todo.completed) ||
    (filter === 'SHOW_COMPLETED' && todo.completed);

  const renderTodos = () => {
    return todos
      .filter(_filterTodos)
      .map((todo: TodoType) => (
        <TodoItem
          key={todo._id}
          _id={todo._id}
          text={todo.text}
          completed={todo.completed}
        />
      ));
  };

  return (
    <section className="main">
      {renderToggleAll()}
      <ul className="todo-list">{renderTodos()}</ul>
    </section>
  );
});

export default List;