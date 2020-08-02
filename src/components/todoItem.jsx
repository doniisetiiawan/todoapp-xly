/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';

function TodoItem({ title, completed, id }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleTodo(id));
  }

  function handleRemove() {
    dispatch(removeTodo(id));
  }

  return (
    <div style={{ width: 400, height: 25 }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      {title}
      <button
        type="button"
        style={{ float: 'right' }}
        onClick={handleRemove}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
