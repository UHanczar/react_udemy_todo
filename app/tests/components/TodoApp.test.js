import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import TodoApp from './../../components/TodoApp';
import TodoApi from './../../api/TodoApi';

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

  it('should toggle completed value when handleToggle is called', () => {
    const todoData = {id: 11, text: 'test features', completed: false};
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
