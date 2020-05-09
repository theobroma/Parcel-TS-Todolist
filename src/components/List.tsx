import React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
// mock data if needed
// import todoarr from '../helpers/mockdata';
import TodoItem from './TodoItem';

class List extends React.Component<any, any> {
  _filterTodos = (todo: any) =>
    this.props.filter === 'SHOW_ALL' ||
    (this.props.filter === 'SHOW_ACTIVE' && !todo.completed) ||
    (this.props.filter === 'SHOW_COMPLETED' && todo.completed);

  _handleTodoToggleAll = () => {
    const bool = this.props.activeTodoCount === 0 ? false : true;
    this.props.handleTodoToggleAll(bool);
  };

  _renderToggleAll() {
    const { todos, activeTodoCount } = this.props;
    if (todos.length) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          onChange={this._handleTodoToggleAll}
          checked={activeTodoCount === 0}
        />
      );
    }
    return null;
  }

  renderTodos() {
    const { todos = [] } = this.props;

    return todos
      .filter(this._filterTodos)
      .map((todo: any) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleTodoRemove={this.props.handleTodoRemove}
          handleTodoToggle={this.props.handleTodoToggle}
        />
      ));
  }

  render() {
    return (
      <section className="main">
        {this._renderToggleAll()}
        <label htmlFor="toggle-all" />
        <ul className="todo-list">{this.renderTodos()}</ul>
      </section>
    );
  }
}

export default List;
