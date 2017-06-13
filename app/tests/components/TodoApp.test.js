import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import configureStore from './../../store/configureStore';
import TodoApp from './../../components/TodoApp';
import TodoList from './../../components/TodoList';
import TodoApi from './../../api/TodoApi';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    const store = configureStore;
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

  // we don't need it in redux
  // it('should add Todo to the todos state on handleAddTodo', () => {
  //   const todoText = 'test text';
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });

  // it('should toggle completed value when handleToggle is called', () => {
  //   const todoData = {id: 11, text: 'test features', completed: false, createdAt: 0, completedAt: undefined};
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });

  // it('should toggle todo value from completed to incompleted', () => {
  //   const todoData = {id: 11, text: 'test features', completed: true, createdAt: 0, completedAt: 123};
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });
});
