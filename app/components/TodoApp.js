import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import uuid from 'uuid';
// import moment from 'moment';
import * as Redux from 'react-redux';

import * as actions from './../actions/actions';

import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
// import TodoApi from './../api/TodoApi';

export class TodoApp extends Component {
  onLogout(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className='page-actions'>
          <a href='#' onClick={(e) => this.onLogout(e)}>Logout</a>
        </div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(TodoApp);
