import React, { Component } from 'react';

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
