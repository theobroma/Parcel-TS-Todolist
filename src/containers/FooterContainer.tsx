import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeCompleted, setFilter } from '../actions';
import FooterComponent from '../components/Footer';

const Footer = (props: any) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <FooterComponent
      // addTodo={this.props.addTodo}
      //   addTodo={() => dispatch(addTodo('example123123'))}
      removeCompleted={props.removeCompleted}
      setFilter={props.setFilter}
      count={props.count}
      filter={filter}
    />
  );
};

export default connect(null, { removeCompleted, setFilter })(Footer);
