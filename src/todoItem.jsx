/* eslint-disable react/prop-types */
import React from 'react';

class TodoItem extends React.Component {
  handleToggle = () => {
    const { toggleTodo, id } = this.props;
    toggleTodo(id);
  };

  handleRemove = () => {
    const { removeTodo, id } = this.props;
    removeTodo(id);
  };

  render() {
    const { title, completed } = this.props;

    return (
      <div style={{ width: 400, height: 25 }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleToggle}
        />
        {title}
        <button
          type="button"
          style={{ float: 'right' }}
          onClick={this.handleRemove}
        >
          x
        </button>
      </div>
    );
  }
}

export default TodoItem;
