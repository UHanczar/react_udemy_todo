import React, { Component } from 'react';
import moment from 'moment';

const Todo = (props) => {
  const { id, text, completed, createdAt, completedAt } = props;
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

  return (
    <div
      className={todoClassName}
      onClick={() => {
      props.onToggle(id);
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

export default Todo;
