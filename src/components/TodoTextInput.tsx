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

  handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      // TODO:
      this.setState({ text: '' });
      // if (this.props.newTodo) {
      //   this.setState({ text: '' });
      // }
    }
  };

  handleChange = (e: any) => {
    // console.log('handleChange');
    this.setState({ text: e.target.value });
  };

  handleBlur = (e: any) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
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
        {/* <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
      </Fragment>
    );
  }
}

export default TodoTextInput;
