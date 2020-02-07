import * as React from 'react';
//test comment
import TodoTextInput from './TodoTextInput';

// export default class Header extends React.Component<any> {
//   handleSave(text: string) {
//     if (text.length !== 0) {
//       this.props.addTodo(text);
//     }
//   }
//   //onSave same name method as in TodoItem component
//   //caused by reuse in different components: this and TodoItem as edit input
//   render() {
//     return (
//       <header className="header">
//         <h1>todos</h1>
//         <TodoTextInput
//           // newTodo
//           onSave={this.handleSave.bind(this)}
//           // placeholder="What needs to be done?"
//         />
//       </header>
//     );
//   }
// }

const Header = (props: any) => {
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      props.addTodo(text);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        // newTodo
        onSave={handleSave}
        // placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
