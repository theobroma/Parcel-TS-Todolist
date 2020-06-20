import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../@store/selectors';
import { actions } from '../@store/actions';

interface Props {
  placeholder?: string;
  //   editing?: boolean;
  //   newTodo?: boolean;
  //   onSave: (text: string) => void;
}

const TodoEditInput: React.FC<Props> = React.memo(
  ({
    placeholder = 'What needs to be done?',
    // editing = false,
    // newTodo = false,
    // onSave,
  }) => {
    const dispatch = useDispatch();
    const { editingTodoTitle } = useSelector(todosSelector);
    const [text, setText] = useState('');

    // const inputRef = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //   if (inputRef.current) {
    //     inputRef.current.focus();
    //   }
    // }, [inputRef]);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const value = event.currentTarget.value.trim();
    //   setText(value);
    // };

    // const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //   const value = event.currentTarget.value.trim();
    //   if (event.which === 13) {
    //     onSave(value);
    //     setText(' ');
    //     // if (this.props.newTodo) {
    //     //   this.setState({ text: '' });
    //     // }
    //   }
    // };

    // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    //   // if (!props.newTodo) {
    //   const value = event.currentTarget.value.trim();
    //   onSave(value);
    //   setText(' ');
    //   // }
    // };

    return (
      <input
        className="edit"
        // value="value"
        value={editingTodoTitle}
        onBlur={() => dispatch(actions.saveEditingTodoTitle())}
        onChange={(event) =>
          dispatch(actions.changeEditingTodoTitle(event.currentTarget.value))
        }
        // onChange={(event) =>
        //   actions.changeEditingTodoTitle(event.currentTarget.value)
        // }
        // onKeyDown={(event) => {
        //   if (event.keyCode === 27) {
        //     actions.cancelEditingTodo();
        //   } else if (event.keyCode === 13) {
        //     actions.saveEditingTodoTitle();
        //   }
        // }}
        // ref={inputRef}
      />
    );
  },
);

export default TodoEditInput;
