import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

// See from here
ReactDOM.render(
  <p>Boilerplate 3 Project</p>
  , document.getElementById('root'));
