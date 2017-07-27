import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import store from './store/configureStore';
import {startAddTodos} from './actions/actions';
import firebase from './firebase/index';
import MainRouter from './router/index';

const history = createHashHistory();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    history.push('/todos');
  } else {
    history.push('/');
  }
});

store.dispatch(startAddTodos());

// See from here
ReactDOM.render(
  <Provider store={store}>
    { MainRouter }
  </Provider>
  , document.getElementById('root'));
