import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import Todo from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  templateUrl: 'app/views/todos.component.html'
})
export default class TodosComponent {
  newTodo: string;
  todos: Todo[];

  constructor(
    private todoService:TodoService,
    private router:Router) { }

  ngOnInit() {
    this.todoService.getTodos()
      .then((todos: Todo[]) => this.todos = todos);
  }

  createTodo(title:string) {
    this.todoService.create(title);
  }

  deleteTodo(idx:number) {
    this.todos.splice(idx, 1);
  }

  onTodoClick(todo:Todo) {
    let link = ['TodoDetail', { title: todo.title }];
    this.router.navigate(link);
  }
}
