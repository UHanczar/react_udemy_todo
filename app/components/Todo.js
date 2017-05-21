import React, { Component } from 'react';
import moment from 'moment';

const Todo = (props) => {
  const { id, text, completed, createdAt, completedAt } = props;
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
      onClick={() => {
      props.onToggle(id);
      }}
    >
      <input type='checkbox' checked={completed} onChange={()=>{}} />
      <p>{text}</p>
      <p>{renderDate()}</p>
    </div>
  );
};

export default Todo;
