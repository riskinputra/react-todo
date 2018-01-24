import React, { Component } from "react";
import "./App.css";

import Headers from "./components/Headers";
import TodosInput from "./components/TodosInput";
import TodoItem from "./components/TodosItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Make dinner tonight" },
        { id: 1, text: "Fold the laundry" }
      ],
      nextId: 2
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(text) {
    // let todos = this.state.todos.slice();
    // todos.push({ id: this.state.nextId, text: text });
    // this.setState({
    //   todo: todos,
    //   nextId: ++this.state.nextId
    // });
    let newData=this.state.todos
    let list = {
      id: this.state.nextId,
      text: text
    }
    newData.push(list)
    this.setState({
      todos: newData,
      nextId: this.state.nextId + 1
    })
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, i) => (
        todo.id !== id
      ))
    })
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Headers />
          <TodosInput todotext="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
