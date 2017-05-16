import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'walk to store',
        },
        {
          id: 4,
          text: 'relax at evening'
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    console.log(`new Todo: ${text}`);
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
