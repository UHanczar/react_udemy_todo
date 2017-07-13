import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterTodos } from './../api/TodoApi';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const { todos, showCompleted, searchText } = this.props;
    // console.log(todos, showCompleted);
    const changedTodos = Object.keys(todos).map(todo => todos[todo]);
    // console.log('changedTodos', changedTodos);
    const renderTodos = () => {
      let filteredTodos = filterTodos(changedTodos, showCompleted, searchText);
      if(filteredTodos.length === 0) {
        return (
          <p className='container__message'>Nothing to do.</p>
        )
      }
      // onToggle={this.props.onToggle} // extracted from <Todo />
      return filteredTodos.map((todo) => {
        // console.log('list', todos[todo]);
        return (
          <Todo key={todos[todo].id} {...todos[todo]} />
        );
      });
    };
    return (
      <div>{renderTodos()}</div>
    );
  }
}

export default connect((state) => state)(TodoList);
