import React, { Component } from 'react';
import uuid from 'uuid';

import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      showSearchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'clean the yard'
        },
        {
          id: uuid(),
          text: 'walk to store',
        },
        {
          id: uuid(),
          text: 'relax at evening'
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(showCompleted, showSearchText) {
    console.log(showCompleted, showSearchText);
    this.setState(() => {
      return {
      showCompleted: showCompleted,
      showSearchText: showSearchText.toLowerCase()
      };
    });
  }

  handleAddTodo(text) {
    console.log(`new Todo: ${text}`);

    this.setState(() => {
      return {
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text
          }
        ]
      };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
