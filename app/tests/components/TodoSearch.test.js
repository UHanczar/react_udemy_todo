import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from './../../components/TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchTextRef = 'Dog';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchTextRef
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.searchText.value = searchTextRef;
    TestUtils.Simulate.change(todoSearch.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.completed.checked = true;
    TestUtils.Simulate.change(todoSearch.completed);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
