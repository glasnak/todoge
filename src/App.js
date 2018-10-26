import React, { Component } from 'react';
import TodoApp from './Components/TodoApp';
import doggo from './doge.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={doggo} className="App-logo" alt="pls" />
          <h1 className="App-title">
            ToĐoge
          </h1>
        </header>
        <div>
          <TodoApp />
          {/* <TodoForm/> */}
          {/* <TodoList todos={[{id: 999, text: 'text'}]}/> */}
        </div>
      </div>
    );
  }
}

export default App;
