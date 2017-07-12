import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/actions';

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    // we can use this bind function, or arrow function in make it work
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTask = this.todoText.value;
    console.log('newTask', newTask);
    if (newTask.length > 0) {
      this.todoText.value = '';
      // this.props.onAddTodo(newTask); // from react
      this.props.dispatch(actions.startAddTodo(newTask));
    } else {
      this.todoText.focus();
    }
  }
  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' ref={(val) => { this.todoText = val; }} placeholder='What do you need to do?' />
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
