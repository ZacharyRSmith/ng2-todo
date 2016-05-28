import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

import Todo from '../models/todo';
import { TodoService } from '../services/todo.service';
import TodoDetailComponent from './todo-detail.component';

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ],
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html'
})
@RouteConfig([
  {
    path: 'detail/:id',
    name: 'TodoDetail',
    component: TodoDetailComponent
  }
])
export class AppComponent implements OnInit {
  newTodo: String;
  title: String;
  todos: Todo[];

  constructor(private todoService:TodoService) {
    this.title = 'Todos';
  }

  ngOnInit() {
    this.todoService.getTodos()
      .then((todos:string[]) => this.todos = todos);
  }

  createTodo(title:string) {
    let todo = new Todo();
    todo.title = title;
    this.todos.push(todo);
  }

  deleteTodo(idx:number) {
    this.todos.splice(idx, 1);
  }
}
