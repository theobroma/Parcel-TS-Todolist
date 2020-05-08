import React from 'react';
import classnames from 'classnames';
import { FilterType } from '../store/types';

interface Props {
  type: FilterType;
  filter: FilterType;
  setFilter: (type: FilterType) => void;
}

const FilterLink: React.FC<Props> = React.memo(
  ({ setFilter, type, filter, children }) => {
    return (
      <li>
        <a
          href="#"
          onClick={() => setFilter(type)}
          className={classnames({ selected: filter === type })}
        >
          {children}
        </a>
      </li>
    );
  },
);

export default FilterLink;
