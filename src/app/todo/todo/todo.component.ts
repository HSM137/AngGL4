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
    this.todoService.createTodo(this.todo.name, this.todo.content);
    this.todos = this.todoService.getTodos();
  }

  logger(id: string) {
    this.todoService.loggerTodo(id);
  }

  supprimer(id: string) {
    this.todoService.supprimerTodo(id);
    this.todos = this.todoService.getTodos();
  }

}
