import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import TodoApp from 'TodoApp';

import {setSearchText, toggleShowCompleted, addTodo} from './actions/actions';
import store from './store/configureStore';

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(addTodo('Clean the yard'));
// store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());

// See from here
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  , document.getElementById('root'));
