import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import cx from 'classnames';
import { actions } from '../@store/actions';

import { TodoType } from '../@store/types';

interface Props {
  todo: TodoType;
  // isEditing: boolean;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  let element;
  element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(actions.handleTodoToggle(todo._id))}
      />
      <label
        htmlFor="itself"
        // edit
        // onDoubleClick={() => dispatch(handleTodoToggle(_id))}
      >
        {todo.text}
      </label>
      <button
        type="button"
        className="destroy"
        onClick={() => dispatch(actions.handleTodoRemove(todo._id))}
      />
    </div>
  );
  return (
    <li
      className={cx({
        completed: todo.completed,
        //  editing: this.state.editing
      })}
    >
      {element}
    </li>
  );
};

export default connect(null, {})(TodoItem);
