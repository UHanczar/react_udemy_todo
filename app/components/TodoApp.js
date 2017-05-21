import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoApi from './../api/TodoApi';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      showSearchText: '',
      todos: TodoApi.getTodos()
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    // console.log(localStorage);
    TodoApi.setTodos(this.state.todos);
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
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      };
    });
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState(() => {
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const { todos, showCompleted, showSearchText } = this.state;
    const filteredTodos = TodoApi.filterTodos(todos, showCompleted, showSearchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
