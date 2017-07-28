import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import store from './store/configureStore';
import { startAddTodos, login, logout } from './actions/actions';
import firebase from './firebase/index';
import MainRouter from './router/index';

const history = createHashHistory();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    history.push('/todos');
  } else {
    store.dispatch(logout());
    history.push('/');
  }
});

// See from here
ReactDOM.render(
  <Provider store={store}>
    { MainRouter }
  </Provider>
  , document.getElementById('root'));
