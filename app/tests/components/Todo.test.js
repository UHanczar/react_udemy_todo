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
});
