import './style.css';

const todoUl = document.getElementById('todoList');

const todoLists = [
  {
    id: 1,
    description: 'Morning session',
    completed: true,
  },
  {
    id: 2,
    description: 'First Program time meeting',
    completed: true,
  },
  {
    id: 3,
    description: 'Second Program time meeting',
    completed: false,
  },
  {
    id: 4,
    description: 'JavaScript packages management',
    completed: true,
  },
  {
    id: 5,
    description: 'Lunch break',
    completed: false,
  },
];

const displayTodos = () => {
  for (let i = 0; i < todoLists.length; i += 1) {
    const item = todoLists[i];
    const itemContainer = document.createElement('li');
    itemContainer.className = 'todo';
    const todoTitle = document.createElement('h3');
    todoTitle.className = 'todo_title';
    todoTitle.innerText = item.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = item.completed;
    checkBox.className = 'checkbox';
    const option = document.createElement('span');
    option.className = 'Refresh-icone';
    option.innerText = 'more';

    const div = document.createElement('div');
    div.appendChild(checkBox);
    div.appendChild(todoTitle);
    div.className = 'todo_right';

    itemContainer.appendChild(div);
    itemContainer.appendChild(option);

    todoUl.appendChild(itemContainer);
  }
};

window.addEventListener('load', () => {
  displayTodos();
  return false;
});
