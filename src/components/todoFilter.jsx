import React from 'react';
import TodoFilterItem from './todoFilterItem';

function TodoFilter(props) {
  return (
    <div>
      <TodoFilterItem {...props} name="all" />
      {' / '}
      <TodoFilterItem {...props} name="active" />
      {' / '}
      <TodoFilterItem {...props} name="completed" />
    </div>
  );
}

export default TodoFilter;
