import Todo from '../models/todo';

let todoA = new Todo();
todoA.title = 'a';
let todoB = new Todo();
todoB.title = 'b';
let todoC = new Todo();
todoC.title = 'c';

export var TODOS: Todo[] = [
  todoA,
  todoB,
  todoC];
