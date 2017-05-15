import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import TodoApp from 'TodoApp';

// See from here
ReactDOM.render(
  <TodoApp />
  , document.getElementById('root'));
