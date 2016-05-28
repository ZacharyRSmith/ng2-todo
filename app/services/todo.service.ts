import { Injectable } from '@angular/core';

import Todo from '../models/todo';
import { TODOS } from '../db/mock-todos';

@Injectable()
export class TodoService {
  create(title:string) {
    let todo = new Todo();
    todo.title = title;

    return Promise.resolve(TODOS)
      .then(todos => todos.push(todo));
  }

  getTodo(title:string) {
    return Promise.resolve(TODOS)
      .then(todos => {
        return todos.find(todo => todo.title === title);
      });
  }

  getTodos() {
    return Promise.resolve(TODOS);
  }
}