import React, { Component, Fragment, useState } from 'react';
import classNames from 'classnames';

class TodoTextInput extends Component<any, any> {
  static defaultProps = {
    text: '',
    placeholder: 'What needs to be done?',
    editing: false,
    newTodo: false,
  };

  state = {
    text: '',
  };

  handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const text: string = event.currentTarget.value.trim();
    if (event.which === 13) {
      this.props.onSave(text);
      // TODO:
      this.setState({ text: '' });
      // if (this.props.newTodo) {
      //   this.setState({ text: '' });
      // }
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = event.currentTarget.value.trim();
    this.setState({ text });
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      const text: string = event.currentTarget.value.trim();
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <Fragment>
        <input
          // className={classNames({
          //   edit: this.props.editing,
          //   'new-todo': this.props.newTodo,
          // })}
          className="new-todo"
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

export default TodoTextInput;
