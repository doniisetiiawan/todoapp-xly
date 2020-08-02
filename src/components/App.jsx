/* eslint-disable react/no-unused-state,react/prop-types */
import React, { useEffect } from 'react';
import Header from './header';
import ConnectedAddTodo from '../containers/ConnectedAddTodo';
import ConnectedTodoList from '../containers/ConnectedTodoList';
import ConnectedTodoFilter from '../containers/ConnectedTodoFilter';

function App({ fetchTodos }) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div style={{ width: 400 }}>
      <Header />
      <ConnectedAddTodo />
      <hr />
      <ConnectedTodoList />
      <hr />
      <ConnectedTodoFilter />
    </div>
  );
}

export default App;
