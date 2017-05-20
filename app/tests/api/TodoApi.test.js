import expect from 'expect';

import TodoApi from './../../api/TodoApi';

describe('TodoApi', () => {
  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  beforeEach(() => {
    localStorage.clear();
		// remove callback
    localStorage.itemInsertionCallback = null;
  });

  describe('setTodos', () => {
    it('should set a valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

    TodoApi.setTodos(todos);

    const actualTodos = JSON.parse(localStorage.getItem('todos'));
    expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {a: 'b'};
      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoApi.getTodos(todos);
      expect(actualTodos).toEqual(todos);
    });
  });
});
