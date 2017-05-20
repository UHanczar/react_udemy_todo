import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import Todo from './../../components/Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // it('should call onToggle prop with id on click', () => {
  //   const todoData = {
  //     id: 19,
  //     text: 'make todo.test.js testing',
  //     completed: true
  //   };
  //
  //   const spy = expect.createSpy();
  //   const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
  //
  //   const $el = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(19);
  //
  // });
});
