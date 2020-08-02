// eslint-disable-next-line max-len
/* eslint-disable react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos } from '../actions';

function TodoFilterItem({ name }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  function handleFilter() {
    dispatch(filterTodos(name));
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
