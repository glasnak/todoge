import React, { Component } from 'react';

const Title = () => (
  <div>
    <h3>
    Very todo. Much react.
    </h3>
  </div>
);

const TodoForm = ({ addTodo }) => {
  // Input tracker
  let input;

  return (
    <div>
      <input ref={(node) => {
        input = node;
      }}
      />
      <button
        type="submit"
        onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}
      >
      add
      </button>
    </div>
  );
};

const Todo = ({ todo, remove }) => (
  <li onClick={() => { remove(todo.id); }}>
    {todo.text}
  </li>
);
const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => (<Todo todo={todo} key={todo.id} remove={remove} />));
  return (
    <ul>
      {todoNode}
    </ul>
  );
};


// Container Component
window.id = 0;
class TodoApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
  }

  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val, id: window.id++ };
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({ data: this.state.data });
  }

  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
      return null;
    });
    // Update state with filter
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
