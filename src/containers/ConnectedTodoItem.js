import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTodo, removeTodo } from '../actions';
import TodoItem from '../components/todoItem';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { toggleTodo, removeTodo },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoItem);
