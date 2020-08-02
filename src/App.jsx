/* eslint-disable react/no-unused-state */
import React from 'react';
import uniqid from 'uniqid';
import Header from './header';
import AddTodo from './addTodo';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import StateContext from './StateContext';
import { fetchAPITodos } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filteredTodos: [],
      filter: 'all',
    };
  }

  componentDidMount = () => {
    this.fetchTodos();
  };

  fetchTodos = () => {
    fetchAPITodos().then((todos) => {
      this.setState({ todos });
      this.filterTodos();
    });
  };

  addTodo = (title) => {
    const { todos } = this.state;

    const newTodo = {
      id: uniqid(),
      title,
      completed: false,
    };

    this.setState({ todos: [newTodo, ...todos] });
    this.filterTodos();
  };

  toggleTodo = (id) => {
    const { todos } = this.state;

    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }, []);

    this.setState({ todos: newTodos });
    this.filterTodos();
  };

  removeTodo = (id) => {
    const { todos } = this.state;

    const newTodos = todos.filter((t) => t.id !== id);

    this.setState({ todos: newTodos });
    this.filterTodos();
  };

  applyFilter = (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => t.completed === false);

      case 'completed':
        return todos.filter((t) => t.completed === true);

      default:
      case 'all':
        return todos;
    }
  };

  filterTodos = (filterArg) => {
    this.setState(({ todos, filter }) => ({
      filter: filterArg || filter,
      filteredTodos: this.applyFilter(
        todos,
        filterArg || filter,
      ),
    }));
  };

  render() {
    const { filter, filteredTodos } = this.state;
    return (
      <StateContext.Provider value={filteredTodos}>
        <div style={{ width: 400 }}>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <hr />
          <TodoList
            toggleTodo={this.toggleTodo}
            removeTodo={this.removeTodo}
          />
          <hr />
          <TodoFilter
            filter={filter}
            filterTodos={this.filterTodos}
          />
        </div>
      </StateContext.Provider>
    );
  }
}

export default App;
