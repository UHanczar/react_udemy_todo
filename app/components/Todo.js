import React, { Component } from 'react';

const Todo = (props) => {
  const { id, text, completed } = props;
  return (
    <div
      onClick={() => {
      props.onToggle(id);
      }}
    >
      <input type='checkbox' checked={completed} onChange={()=>{}} />
      {text}
    </div>
  );
}

export default Todo;
