import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from '../actions';
import AddTodo from '../components/addTodo';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
