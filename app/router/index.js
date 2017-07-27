import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import firebase from './../firebase/index';

import TodoApp from './../components/TodoApp';
import Authentification from './../components/Authentification';

import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

const requireLogin = () => {
  if (!firebase.auth().currentUser) {
    return <Redirect to='/' />
  } else {
    return <TodoApp />
  }
};

const haveLogged = () => {
  if (firebase.auth().currentUser) {
    return <Redirect to='/todos' />;
  } else {
    return <Authentification />;
  }
};

export default (
  <Router history={history}>
    <div className='app'>
      <Switch>
        <Route exact path='/' render={haveLogged} />
        <Route path='/todos' render={requireLogin} />
      </Switch>
    </div>
  </Router>
);
