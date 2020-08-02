/* eslint-disable react/no-unused-state,react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './header';
import AddTodo from './addTodo';
import { fetchTodos } from '../actions';
import TodoList from './todoList';
import TodoFilter from './todoFilter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ width: 400 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <TodoFilter />
    </div>
  );
}

export default App;
