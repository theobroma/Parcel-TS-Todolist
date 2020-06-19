import React from 'react';
import TodoApp from '../../@components/TodoApp';

const MainApp: React.FC = () => {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <TodoApp />
        </div>
      </section>
    </div>
  );
};

export default MainApp;
