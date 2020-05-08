import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  handleTodoRemove,
  handleTodoToggle,
  handleTodoToggleAll,
} from '../store/actions';
import { RootState } from '../store/index';
import ListComponent from '../components/List';

const List = (props: any) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.data);
  const filter = useSelector((state: RootState) => state.filter);
  return (
    <ListComponent
      todos={todos}
      filter={filter}
      handleTodoRemove={props.handleTodoRemove}
      handleTodoToggle={props.handleTodoToggle}
      activeTodoCount={props.activeTodoCount}
      handleTodoToggleAll={props.handleTodoToggleAll}
    />
  );
};

export default connect(null, {
  handleTodoRemove,
  handleTodoToggle,
  handleTodoToggleAll,
})(List);
