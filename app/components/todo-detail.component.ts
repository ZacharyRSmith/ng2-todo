import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import Todo from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: 'app/views/todo-detail.component.html'
})
export default class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService:TodoService,
    private routeParams:RouteParams) { }

  ngOnInit() {
    const title = this.routeParams.get('title');

    this.todoService.getTodo(title)
      .then(todo => this.todo = todo);
  }

  goBack() {
    window.history.back();
  }
}