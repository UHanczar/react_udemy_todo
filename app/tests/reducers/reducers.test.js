import expect from 'expect';
import df from 'deep-freeze-strict';

import { searchTextReducer, showCompletedReducer, todosReducer } from '../../reducers/reducers';

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
        text: 'run'
      };

      const res = todosReducer(df([]), action);

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo item', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 123
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

      const res = todosReducer(df(todos), action);

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
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

      const res = todosReducer(df([]), df(action));Y
      // expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
