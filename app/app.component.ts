import { Component } from '@angular/core';
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
//   from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  newTodo: String;
  title: String;
  todos: String[];

  constructor() {
    this.title = 'Todos';
    this.todos = ['a', 'b'];
  }

  createTodo(newTodo:String) {
    this.todos.push(newTodo);
  }
}
