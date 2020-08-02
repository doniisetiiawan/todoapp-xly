/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem({
  title,
  completed,
  id,
  toggleTodo,
  removeTodo,
}) {
  function handleToggle() {
    toggleTodo(id);
  }

  function handleRemove() {
    removeTodo(id);
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
        style={{ float: 'right' }}
        onClick={handleRemove}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
