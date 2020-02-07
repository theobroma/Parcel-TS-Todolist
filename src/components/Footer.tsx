import * as React from 'react';
import * as classNames from 'classnames';
import FilterLink from './FilterLink';

class Footer extends React.Component<any, any> {
  _renderClearButton() {
    const { completedCount, removeCompleted } = this.props;
    if (completedCount > 0 || true) {
      return (
        <button className="clear-completed" onClick={removeCompleted}>
          Clear completed
        </button>
      );
    }
    return null;
  }

  render() {
    const { count } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> items left
        </span>
        <ul className="filters">
          <FilterLink type={'SHOW_ALL'} {...this.props}>
            All
          </FilterLink>
          <FilterLink type={'SHOW_ACTIVE'} {...this.props}>
            Active
          </FilterLink>
          <FilterLink type={'SHOW_COMPLETED'} {...this.props}>
            Completed
          </FilterLink>
        </ul>
        {/* <button className="clear-completed" onClick={this.props.removeCompleted}>
          Clear completed
        </button> */}
        {this._renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
