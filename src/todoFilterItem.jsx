// eslint-disable-next-line max-len
/* eslint-disable react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';

function TodoFilterItem({
  name,
  filterTodos,
  filter = 'all',
}) {
  function handleFilter() {
    filterTodos(name);
  }

  const style = {
    color: 'blue',
    cursor: 'pointer',
    fontWeight: filter === name ? 'bold' : 'normal',
  };

  return (
    <span style={style} onClick={handleFilter}>
      {name}
    </span>
  );
}

export default TodoFilterItem;
