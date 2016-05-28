import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html'
})
export default class TodoDetailComponent {
  todo: String;

  constructor(
    private todoService:TodoService,
    private routeParams:RouteParams) { }
}