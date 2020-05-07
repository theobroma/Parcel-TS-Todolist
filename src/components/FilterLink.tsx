import React from 'react';
import classnames from 'classnames';

interface Props {
  // type: string;
  // filter: string;
  // setFilter: (type: any) => void; //TODO:
}

const FilterLink: React.FC<Props> = ({ setFilter, type, filter, children }) => (
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

export default FilterLink;
