import { v1 } from 'uuid';
import { TodoListType } from './types';
import { todosReducer } from './todos-reducer';
import { actions } from './actions';

test('todolist byId should be removed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodoListType = {
    data: [
      { _id: todolistId1, text: 'What to learn', completed: false },
      { _id: todolistId2, text: 'What to buy', completed: false },
    ],
    editingTodoId: null,
    editingTodoTitle: '',
  };

  const endState = todosReducer(
    startState,
    actions.handleTodoRemove(todolistId1),
  );

  expect(endState.data.length).toBe(1);
  expect(endState.data[0]._id).toBe(todolistId2);
});

// test( 'correct todolist should be removed', () => {
//   let todolistId1 = v1();
//   let todolistId2 = v1();

//   const startState: Array<todoListType> = [
//     { id: todolistId1, title: "What to learn", filter: "all" },
//     { id: todolistId2, title: "What to buy", filter: "all" }
//   ];

//   const endState = todolistsReducer( startState, RemoveTodolistAC( todolistId1 ) );

//   expect( endState.length ).toBe( 1 );
//   expect( endState[ 0 ].id ).toBe( todolistId2 );
// } );

// test( 'correct todolist should be added', () => {
//   let todolistId1 = v1();
//   let todolistId2 = v1();

//   let newTodolistTitle = "New Todolist";

//   const startState: Array<todoListType> = [
//     { id: todolistId1, title: "What to learn", filter: "all" },
//     { id: todolistId2, title: "What to buy", filter: "all" }
//   ];

//   const endState = todolistsReducer( startState, AddTodolistAC( newTodolistTitle ) );

//   expect( endState.length ).toBe( 3 );
//   expect( endState[ 2 ].title ).toBe( newTodolistTitle );
// } );

// test( 'correct filter of todolist should be changed', () => {
//   let todolistId1 = v1();
//   let todolistId2 = v1();

//   let newFilter: FilterValuesType = "completed";

//   const startState: Array<todoListType> = [
//     { id: todolistId1, title: "What to learn", filter: "all" },
//     { id: todolistId2, title: "What to buy", filter: "all" }
//   ];

//   const action: ActionType = {
//     type: 'CHANGE-TODOLIST-FILTER',
//     id: todolistId2,
//     filter: newFilter
//   };

//   const endState = todolistsReducer( startState, ChangeTodolistFilterAC( newFilter, todolistId2 ) );

//   expect( endState[ 0 ].filter ).toBe( "all" );
//   expect( endState[ 1 ].filter ).toBe( newFilter );
// } );

// test( 'correct todolist should change its name', () => {
//   let todolistId1 = v1();
//   let todolistId2 = v1();

//   let newTodolistTitle = "New Todolist";

//   const startState: Array<todoListType> = [
//     { id: todolistId1, title: "What to learn", filter: "all" },
//     { id: todolistId2, title: "What to buy", filter: "all" }
//   ];
//   const action: ActionType = {
//     type: 'CHANGE-TODOLIST-TITLE',
//     id: todolistId2,
//     title: newTodolistTitle
//   };

//   const endState = todolistsReducer( startState, ChangeTodolistTitleAC( todolistId2, newTodolistTitle ) );

//   expect( endState[ 0 ].title ).toBe( "What to learn" );
//   expect( endState[ 1 ].title ).toBe( newTodolistTitle );
// } );
