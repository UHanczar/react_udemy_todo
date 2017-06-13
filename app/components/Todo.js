import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { toggleTodo } from './../actions/actions';

export const Todo = (props) => {
  const { id, text, completed, createdAt, completedAt, dispatch } = props;
  const todoClassName = completed ? 'todo todo-completed' : 'todo'
  let renderDate = () => {
    let message = 'Created ';
    let timestamp = createdAt;

    if (completed) {
      message = 'Completed ';
      timestamp = completedAt;
    }

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  };
  // //props.onToggle(id); // extracted from onClick
  return (
    <div
      className={todoClassName}
      onClick={() => {
        dispatch(toggleTodo(id))
      }}
    >
      <div>
        <input type='checkbox' checked={completed} onChange={()=>{}} />
      </div>
      <div>
        <p>{text}</p>
        <p className='todo__subtext'>{renderDate()}</p>
      </div>
    </div>
  );
};

export default connect()(Todo);
