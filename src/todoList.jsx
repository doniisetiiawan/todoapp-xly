import React, { useContext } from 'react';
import TodoItem from './todoItem';
import StateContext from './StateContext';

function TodoList(props) {
  const items = useContext(StateContext);

  return items.map((item) => (
    <TodoItem {...item} {...props} key={item.id} />
  ));
}

export default TodoList;
