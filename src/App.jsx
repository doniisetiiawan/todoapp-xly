/* eslint-disable react/no-unused-state */
import React, {
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import Header from './header';
import AddTodo from './addTodo';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import StateContext from './StateContext';
import appReducer from './reducers';
import { fetchAPITodos } from './api';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    todos: [],
    filter: 'all',
  });

  useEffect(() => {
    fetchAPITodos().then((todos) => dispatch({ type: 'FETCH_TODOS', todos }));
  }, []);

  const filteredTodos = useMemo(() => {
    const { filter, todos } = state;
    switch (filter) {
      case 'active':
        return todos.filter((t) => t.completed === false);

      case 'completed':
        return todos.filter((t) => t.completed === true);

      default:
      case 'all':
        return todos;
    }
  }, [state]);

  function addTodo(title) {
    dispatch({ type: 'ADD_TODO', title });
  }

  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  function removeTodo(id) {
    dispatch({ type: 'REMOVE_TODO', id });
  }

  function filterTodos(filter) {
    dispatch({ type: 'FILTER_TODOS', filter });
  }

  return (
    <StateContext.Provider value={filteredTodos}>
      <div style={{ width: 400 }}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <hr />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        <hr />
        <TodoFilter
          filter={state.filter}
          filterTodos={filterTodos}
        />
      </div>
    </StateContext.Provider>
  );
}

export default App;
