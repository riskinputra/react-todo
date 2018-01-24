import React, { Component } from "react";
import "./TodosItem.css";

class TodosItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.todo.id)}
        >
          Remove
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}

export default TodosItem;
