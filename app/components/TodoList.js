import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterTodos } from './../api/TodoApi';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do.</p>
        )
      }
      // onToggle={this.props.onToggle} // extracted from <Todo />
      return filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };
    return (
      <div>{renderTodos()}</div>
    );
  }
}

export default connect((state) => state)(TodoList);
