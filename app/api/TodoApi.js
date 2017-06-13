import $ from 'jquery';

const setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
};

const getTodos = () => {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];

  try {
    todos = JSON.parse(stringTodos);
  } catch (e) {

  }

  return $.isArray(todos) ? todos : [];
};

export const filterTodos = (todos, showCompleted, showSearchText) => {
  let filteredTodos = todos;

  // filter by showCompleted
  filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted);

  // filter by showSearchText
  filteredTodos = filteredTodos.filter((todo) => {
    const todoText = todo.text.toLowerCase();

    return showSearchText.length === 0 || todoText.indexOf(showSearchText) > -1;
  });
  // sort todos with noncompleted first
  filteredTodos.sort((a, b) => !a.completed && b.completed ? -1 : 1);

  return filteredTodos;
};

export default {
  setTodos,
  getTodos,
  filterTodos
};
