import $ from 'jquery';

// const setTodos = (todos) => {
//   if ($.isArray(todos)) {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     return todos;
//   }
// };
//
// const getTodos = () => {
//   const stringTodos = localStorage.getItem('todos'
// );
//   let todos = [];
//
//   try {
//     todos = JSON.parse(stringTodos);
//   } catch (e) {
//
//   }
//
//   return $.isArray(todos) ? todos : [];
// };

export const filterTodos = (todos, showCompleted, showSearchText) => {
  let filteredTodos = Object.keys(todos);
  // console.log(filteredTodos);

  // filter by showCompleted
  filteredTodos = filteredTodos.filter((todo) => {
    // console.log(todos[todo]);
    return !todos[todo].completed || showCompleted;
  });

  // filter by showSearchText
  filteredTodos = filteredTodos.filter((todo) => {
    // console.log('second todo', todos[todo].text);
    const todoText = todos[todo].text.toLowerCase();
    // const todoText = todo.text;
    // console.log('todotext', todo);

    return showSearchText.length === 0 || todoText.indexOf(showSearchText) > -1;
  });
  // sort todos with noncompleted first
  // filteredTodos.sort((a, b) => !a.completed && b.completed ? -1 : 1);

  return filteredTodos;
};

export default {
  // setTodos,
  // getTodos,
  filterTodos
};
