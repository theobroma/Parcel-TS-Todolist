import * as React from 'react';
import * as classNames from 'classnames';
import { FilterType } from '../store/types';
import FilterLink from './FilterLink';

interface Props {
  count: number;
  completedCount: number;
  removeCompleted: () => void;
  // FilterLinkProps
  filter: FilterType;
  setFilter: (type: FilterType) => void;
}

class Footer extends React.Component<Props> {
  public _renderClearButton() {
    const { completedCount, removeCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={removeCompleted}>
          Clear completed
        </button>
      );
    }
    return null;
  }

  public render() {
    const { count, filter, setFilter } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> items left
        </span>
        <ul className="filters">
          <FilterLink type={'SHOW_ALL'} filter={filter} setFilter={setFilter}>
            All
          </FilterLink>
          <FilterLink
            type={'SHOW_ACTIVE'}
            filter={filter}
            setFilter={setFilter}
          >
            Active
          </FilterLink>
          <FilterLink
            type={'SHOW_COMPLETED'}
            filter={filter}
            setFilter={setFilter}
          >
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
