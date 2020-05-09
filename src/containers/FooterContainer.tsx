import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeCompleted, setFilter } from '../store/actions';
import { filterSelector } from '../store/selectors';
import FooterComponent from '../components/Footer';

const Footer = (props: any) => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  return (
    <FooterComponent
      removeCompleted={props.removeCompleted}
      setFilter={props.setFilter}
      count={props.count}
      completedCount={props.completedCount}
      filter={filter}
    />
  );
};

export default connect(null, { removeCompleted, setFilter })(Footer);
