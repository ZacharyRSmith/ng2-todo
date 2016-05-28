import { Injectable } from '@angular/core';

import { TODOS } from '../db/mock-todos';

@Injectable()
export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }
}