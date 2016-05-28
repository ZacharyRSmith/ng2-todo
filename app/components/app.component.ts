import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
  from '@angular/router-deprecated';

import Todo from '../models/todo';
import { TodoService } from '../services/todo.service';
import TodosComponent from './todos.component';
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
    path: '/todos',
    name: 'Todos',
    component: TodosComponent,
    useAsDefault: true
  },
  {
    path: 'detail/:title',
    name: 'TodoDetail',
    component: TodoDetailComponent
  }
])
export class AppComponent {
  title = 'Todos';
}
