import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import Todo from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html'
})
export default class TodoDetailComponent {
  todo: Todo;

  constructor(
    private todoService:TodoService,
    private routeParams:RouteParams) { }
}