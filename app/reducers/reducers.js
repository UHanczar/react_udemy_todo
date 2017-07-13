import uuid from 'uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...Object.keys(state).map(todo => state[todo]),
        action.todo
      ];
    case 'UPDATE_TODO':
      console.log(state);
      return Object.keys(state).map(todo => {
        if (state[todo].id === action.id) {
          return {
            ...state[todo],
            ...action.updates
          }
        } else {
          return state[todo];
        }
      });
    case 'ADD_TODOS':
    return {
      ...state.todos,
      ...action.todos
    };
    default:
      return state;
  }

};
