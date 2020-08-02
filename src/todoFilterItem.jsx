// eslint-disable-next-line max-len
/* eslint-disable react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';

class TodoFilterItem extends React.Component {
  handleFilter = () => {
    const { name, filterTodos } = this.props;
    filterTodos(name);
  };

  render() {
    const { name, filter = 'all' } = this.props;
    const style = {
      color: 'blue',
      cursor: 'pointer',
      fontWeight: filter === name ? 'bold' : 'normal',
    };

    return (
      <span style={style} onClick={this.handleFilter}>
        {name}
      </span>
    );
  }
}

export default TodoFilterItem;
