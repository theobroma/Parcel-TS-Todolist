import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer';
import ListContainer from '../containers/ListContainer';
import FooterContainer from '../containers/FooterContainer';

const MainApp: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  const activeTodoCount = todos.reduce(function(accum: any, todo: any) {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedCount = todos.length - activeTodoCount;

  let footer;

  if (activeTodoCount || completedCount) {
    footer = <FooterContainer count={activeTodoCount} completedCount={completedCount} />;
  }

  return (
    <div>
      {/*Header*/}
      <HeaderContainer />
      {/*Main*/}
      <ListContainer activeTodoCount={activeTodoCount} />
      {/*Footer*/}
      {footer}
    </div>
  );
};

export default connect(null, {})(MainApp);
