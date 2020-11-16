import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  loggerTodo(todo: Todo) {
    const index=this.todos.indexOf(todo);
    if(index>=0) {
      console.log(todo);
    }
    else {
      console.log("Erreur: Todo not found");
    }
  }

  createTodo(todo: Todo) {
    this.todos.push(todo)
  }

  supprimerTodo(todo: Todo) {
    const index=this.todos.indexOf(todo);
    if (index>=0) {
      this.todos.splice(index, 1);
    }
    else{
      console.log("Erreur: Todo Not found");
    }
  }

  getTodos() {
    return this.todos;
  }

}
