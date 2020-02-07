import React from 'react';
import classnames from 'classnames';

export default class FilterLink extends React.Component<any, any> {
  render() {
    const { setFilter, type, filter } = this.props;
    return (
      <li>
        <a
          href="#"
          onClick={() => setFilter(type)}
          className={classnames({ selected: filter === type })}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}
