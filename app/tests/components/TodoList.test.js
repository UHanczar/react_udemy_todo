import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import { configure } from './../../store/configureStore';
import ConnectedTodoList, { TodoList } from './../../components/TodoList';
import ConnectedTodo, { Todo } from './../../components/Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  // it('should render one Todo component for each Todo item', () => {
  //   const todos = [{
  //     id: 1,
  //     text: 'Do something',
  //     completed: false,
  //     completedAt: undefined,
  //     createdAt: 500
  //   },
  //   {
  //     id: 2,
  //     text: 'Check mail',
  //     completed: false,
  //     completedAt: undefined,
  //     createdAt: 600
  //   }];
  //
  //   const store = configure({
  //     todos
  //   });
  //   const provider = TestUtils.renderIntoDocument(
  //     <Provider store={store}>
  //       <ConnectedTodoList />
  //     </Provider>
  //   )
  //
  //   // this is for react component testing
  //   // const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
  //   const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
  //   const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
  //
  //   // expect(todosComponents.length).toBe(todos.length);
  //   expect(todosComponents).toExist();
  // });

  it('should render empty message if no todos', () => {
    const todos = [];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
