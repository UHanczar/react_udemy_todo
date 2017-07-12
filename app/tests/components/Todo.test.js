import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import { Todo } from './../../components/Todo';
import { startToggleTodo } from './../../actions/actions'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // it('should dispatch TOGGLE_TODO action on click', () => {
  //   const todoData = {
  //     id: 19,
  //     text: 'make todo.test.js testing',
  //     completed: true
  //   };
  //
  //   const action = startToggleTodo(todoData.id, !todoData.completed);
  //
  //   const spy = expect.createSpy();
  //   const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
  //
  //   const $el = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(action);
  // });
});
