import React, { useState } from 'react';

interface Props {
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
  onSave: (text: string) => void;
}

const TodoTextInput: React.FC<Props> = React.memo(
  ({
    placeholder = 'What needs to be done?',
    editing = false,
    newTodo = false,
    onSave,
  }) => {
    const [text, setText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value.trim();
      setText(value);
    };

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value.trim();
      if (event.which === 13) {
        onSave(value);
        // TODO:
        setText(' ');
        // if (this.props.newTodo) {
        //   this.setState({ text: '' });
        // }
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      // if (!props.newTodo) {
      const value = event.currentTarget.value.trim();
      onSave(value);
      setText(' ');
      // }
    };

    return (
      <>
        <input
          // className={classNames({
          //   edit: this.props.editing,
          //   'new-todo': this.props.newTodo,
          // })}
          className="new-todo"
          type="text"
          placeholder={placeholder}
          autoFocus
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </>
    );
  },
);

export default TodoTextInput;
