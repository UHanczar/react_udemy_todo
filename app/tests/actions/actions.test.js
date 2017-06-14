import expect from 'expect';
import { setSearchText, toggleShowCompleted, addTodo, toggleTodo, addTodos } from './../../actions/actions';

describe('actions', () => {
  it('should generate searchText action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'things to do'
    };

    const res = addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate addTodos action', () => {
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

    const res = addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 3
    };

    const res = toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
