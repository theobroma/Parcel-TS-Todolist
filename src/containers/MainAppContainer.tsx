import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import HeaderComponent from '../components/Header';
import ListContainer from '../containers/ListContainer';
import FooterContainer from '../containers/FooterContainer';
import { todosSelector } from '../store/selectors';

const MainApp: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector).data;

  const activeTodoCount = todos.reduce((accum: any, todo: any) => {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedCount = todos.length - activeTodoCount;

  let footer;

  if (activeTodoCount || completedCount) {
    footer = (
      <FooterContainer
        count={activeTodoCount}
        completedCount={completedCount}
      />
    );
  }

  return (
    <div>
      {/*Header*/}
      <HeaderComponent />
      {/*Main*/}
      <ListContainer activeTodoCount={activeTodoCount} />
      {/*Footer*/}
      {footer}
    </div>
  );
};

export default connect(null, {})(MainApp);
