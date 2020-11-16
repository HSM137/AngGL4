import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo = new Todo();

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onSubmit() {
    this.todoService.createTodo(this.todo);
    this.todo=new Todo();
  }

  logger(todo: Todo) {
    this.todoService.loggerTodo(todo);
  }

  supprimer(todo: Todo) {
    this.todoService.supprimerTodo(todo);
  }

}
