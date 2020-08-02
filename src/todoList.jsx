import React, { Component } from 'react';
import TodoItem from './todoItem';
import StateContext from './StateContext';

class TodoList extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = StateContext;

  render() {
    const items = this.context;
    return items.map((item) => (
      <TodoItem {...item} {...this.props} key={item.id} />
    ));
  }
}

export default TodoList;
