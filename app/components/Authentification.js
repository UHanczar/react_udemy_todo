import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Redux from 'react-redux';

import firebase from './../firebase/index';
import * as actions from './../actions/actions';

// <Link to='/todos'>Login</Link>
export class Authentification extends Component {
  onLogin() {
    const { dispatch } = this.props;

    dispatch(actions.startLogin());
    // this.props.history.push(`/todos`);
  }

  render() {
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <div className='callout callout-auth'>
              <h3>Login</h3>
              <p>Login with GitHub Account Below</p>
              {/* <Link to='/todos'>Login with GitHub</Link> */}
              <button className='button' onClick={() => this.onLogin()}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(Authentification);
