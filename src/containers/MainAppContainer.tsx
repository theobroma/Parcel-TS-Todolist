import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from '../components/Header/Header';
import ListComponent from '../components/List/List';
import FooterComponent from '../components/Footer/Footer';
import { todosSelector } from '../store/selectors';

const MainApp: React.FC = (props: any) => {
  const todos = useSelector(todosSelector).data;

  const activeTodoCount = todos.reduce((accum: any, todo: any) => {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedCount = todos.length - activeTodoCount;

  let footer;

  if (activeTodoCount || completedCount) {
    footer = (
      <FooterComponent
        activeTodoCount={activeTodoCount}
        completedCount={completedCount}
      />
    );
  }

  return (
    <div className="App">
      <section className="todoapp">
        <div>
          {/*Header*/}
          <HeaderComponent />
          {/*Main*/}
          <ListComponent activeTodoCount={activeTodoCount} />
          {/*Footer*/}
          {footer}
        </div>
      </section>
    </div>
  );
};

export default MainApp;
