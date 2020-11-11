import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  loggerTodo(id: string) {
    const todo=this.todos.find(x => x.id===id);
    if(todo) {
      console.log(todo);
    }
    else {
      console.log("Erreur: Todo not found");
    }
  }

  createTodo(name: string, content: string) {
    this.todos.push(new Todo(uuidv4(), name, content))
  }

  supprimerTodo(id: string) {
    this.todos=this.todos.filter(x => x.id !=id);
  }

  getTodos() {
    return this.todos;
  }

}
