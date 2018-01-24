import React, { Component } from "react";
import "./TodosInput.css";

class TodosInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleTodo = this.handleTodo.bind(this);
  }
  handleTodo(e) {
    this.setState({
      value: e.target.value
    });
  }
  addTodo(todo) {

    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({
        value: ""
      });
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTodo}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default TodosInput;
