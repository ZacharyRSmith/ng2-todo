import { Component } from '@angular/core';
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
//   from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <ul class="todos">
        <li *ngFor="let todo of todos">
          {{todo}}
        </li>
      </ul>
    `
})
export class AppComponent {
  title: String;
  todos: String[];

  constructor() {
    this.title = 'Todos';
    this.todos = ['a', 'b'];
  }
}
