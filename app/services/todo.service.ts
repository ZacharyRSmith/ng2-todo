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

  getTodos() {
    return Promise.resolve(TODOS);
  }
}