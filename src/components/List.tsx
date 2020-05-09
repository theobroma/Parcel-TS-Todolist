import React from 'react';
import TodoItem from './TodoItem';
import { TodoType } from '../store/types';

class List extends React.Component<any, any> {
  _filterTodos = (todo: TodoType) =>
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
      .map((todo: TodoType) => (
        <TodoItem
          key={todo._id}
          _id={todo._id}
          text={todo.text}
          completed={todo.completed}
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
