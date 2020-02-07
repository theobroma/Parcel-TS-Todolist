import { connect, useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { addTodo } from '../actions';
import HeaderComponent from '../components/Header';
// import FooterComponent from '../components/Footer';

const Header = (props: any) => {
  const dispatch = useDispatch();
  return (
    <HeaderComponent
      // addTodo={this.props.addTodo}
      //   addTodo={() => dispatch(addTodo('example123123'))}
      addTodo={props.addTodo}
    />
  );
};

export default connect(null, { addTodo })(Header);
