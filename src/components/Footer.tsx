import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/actions';
import FilterLink from './FilterLink';

interface Props {
  activeTodoCount: number;
  completedCount: number;
  // removeCompleted: () => void;
  // FilterLinkProps
  // filter: FilterType;
  // setFilter: (type: FilterType) => void;
}

const Footer: React.FC<Props> = React.memo(
  ({ activeTodoCount, completedCount }) => {
    const dispatch = useDispatch();

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(actions.removeCompleted());
    };

    const renderClearButton = () => {
      if (completedCount > 0) {
        return (
          <button className="clear-completed" onClick={handleButtonClick}>
            Clear completed
          </button>
        );
      }
      return null;
    };
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodoCount}</strong> items left
        </span>
        <ul className="filters">
          <FilterLink type={'SHOW_ALL'}>All</FilterLink>
          <FilterLink type={'SHOW_ACTIVE'}>Active</FilterLink>
          <FilterLink type={'SHOW_COMPLETED'}>Completed</FilterLink>
        </ul>
        {renderClearButton()}
      </footer>
    );
  },
);

export default Footer;
