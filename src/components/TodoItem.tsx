import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { actions } from '../store/actions';

import { TodoType } from '../store/types';

const TodoItem = ({ _id, text, completed }: TodoType) => {
  const dispatch = useDispatch();
  let element;
  element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(actions.handleTodoToggle(_id))}
      />
      <label
        htmlFor="itself"
        // edit
        // onDoubleClick={() => dispatch(handleTodoToggle(_id))}
      >
        {text}
      </label>
      <button
        className="destroy"
        onClick={() => dispatch(actions.handleTodoRemove(_id))}
      />
    </div>
  );
  return (
    <li
      className={cx({
        // tslint:disable-next-line
        completed: completed,
        //  editing: this.state.editing
      })}
    >
      {element}
    </li>
  );
};

export default connect(null, {})(TodoItem);
