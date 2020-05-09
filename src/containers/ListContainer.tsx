import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { handleTodoToggleAll } from '../store/actions';
import { todosSelector, filterSelector } from '../store/selectors';
import ListComponent from '../components/List';

const List = (props: any) => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector).data;
  const filter = useSelector(filterSelector);
  return (
    <ListComponent
      todos={todos}
      filter={filter}
      activeTodoCount={props.activeTodoCount}
      handleTodoToggleAll={props.handleTodoToggleAll}
    />
  );
};

export default connect(null, {
  handleTodoToggleAll,
})(List);
