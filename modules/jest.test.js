import addTodo from './addTodo.js';
import { deleteTodo } from './crud.js';
import { selectTodo } from './crud2.js';
/**
 * @jest-environment jsdom
 */

describe('TodoApp', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  let todos = window.document.querySelectorAll('.todo');

  it('should add one new item to the DOM', () => {
    document.body.innerHTML = `
     <ul id="todoList"><li></li></ul>' `;
    const todoUl = document.getElementById('todoList');
    const todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todos = window.document.querySelectorAll('.todo');
    expect(todos).toHaveLength(1);
  });

  it('should add one new item to the localstorage', () => {
    document.body.innerHTML = `
     <ul id="todoList"><li></li></ul>' `;
    const todoUl = document.getElementById('todoList');
    const todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    expect(todoListss).toHaveLength(1);
  });
});
