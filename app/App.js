import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import TodoApp from 'TodoApp';

import {toggleShowCompleted, addTodo, addTodos} from './actions/actions';
import store from './store/configureStore';
import TodoApi from './api/TodoApi';

store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);
  TodoApi.setTodos(state.todos);
});

const initialTodos = TodoApi.getTodos();
store.dispatch(addTodos(initialTodos));

store.dispatch(addTodo('Clean the yard'));
// store.dispatch(setSearchText('yard'));
// store.dispatch(toggleShowCompleted());

// See from here
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  , document.getElementById('root'));
