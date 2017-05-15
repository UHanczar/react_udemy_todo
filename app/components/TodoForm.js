import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }
  addTodo(e) {
    e.preventDefault();
    const newTodo = this.text.value;
    this.props.onAddTodo(newTodo);

  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addTodo(e)}>
          <input type='text' ref={(val) => { this.text = val; }} />
          <button className='button'>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
