import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

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
  todos: String[];

  constructor(private todoService:TodoService) {
    this.title = 'Todos';
  }

  ngOnInit() {
    this.todoService.getTodos()
      .then((todos:string[]) => this.todos = todos);
  }

  createTodo(newTodo:String) {
    this.todos.push(newTodo);
  }

  deleteTodo(idx:number) {
    this.todos.splice(idx, 1);
  }
}
