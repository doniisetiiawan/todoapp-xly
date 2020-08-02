import { connect } from 'react-redux';

import TodoList from '../components/todoList';

function mapStateToProps(state) {
  const { filter, todos } = state;
  return { filter, todos };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
