import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import TodoApp from './../../components/TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add Todo to the todos state on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
