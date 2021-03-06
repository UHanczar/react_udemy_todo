import expect from 'expect';
import df from 'deep-freeze-strict';

import { searchTextReducer, showCompletedReducer, todosReducer, authReducer } from '../../reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      const res = searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle completed tasks', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      const res = showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'Something to do',
          completed: false,
          createdAt: 8377474
        }
      };

      const res = todosReducer(df([]), action);

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todo item', () => {
      const updates = {
        completed: false,
        completedAt: null
      };

      const todos = [
        {
          id: 123,
          text: 'Run',
          completed: true,
          createdAt: 1496693930,
          completedAt: 1497291943
        }
      ];

      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      const action = {
        type: 'ADD_TODOS',
        todos: todos
      };

      const res = todosReducer(df([]), df(action));
      // expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: '123abc'
      };

      const res = authReducer(undefined, df(action));

      expect(res).toEqual({ uid: action.uid });
    });
  });

  describe('authReducer', () => {
    it('it should wipe out auth on LOGOUT', () => {
      const action = {
        type: 'LOGOUT'
      };

      const authData = {
        uid: '123abc'
      };

      const res = authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});
