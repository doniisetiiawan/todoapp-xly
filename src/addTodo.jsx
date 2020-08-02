/* eslint-disable react/prop-types */
import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    const { input } = this.state;
    const { addTodo } = this.props;

    if (input) {
      addTodo(input);
      this.setState({ input: '' });
    }
  };

  render() {
    const { input } = this.state;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleAdd();
        }}
      >
        <input
          type="text"
          placeholder="enter new task..."
          style={{ width: 350, height: 15 }}
          value={input}
          onChange={this.handleInput}
        />
        <input
          type="submit"
          style={{ float: 'right', marginTop: 2 }}
          disabled={!input}
          value="add"
        />
      </form>
    );
  }
}

export default AddTodo;
