import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/actions';
// test comment
import TodoTextInput from './TodoTextInput';

interface Props {
  // addTodo: (text: string) => void;
}

const Header: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      dispatch(actions.addTodo(text));
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        // newTodo
        onSave={handleSave}
        // placeholder="What needs to be done?"
      />
    </header>
  );
});

export default Header;
