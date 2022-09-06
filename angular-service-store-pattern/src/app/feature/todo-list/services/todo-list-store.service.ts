// Dependencies
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Types
import { Todo } from '../components/todo/todo.component';

@Injectable()
export class TodoListStoreService {
  #todos$ = new BehaviorSubject<Todo[] | null>(null);
  todos$ = this.#todos$.asObservable();

  setTodos(todos: Todo[]): void {
    this.#todos$.next(todos);
  }

  getTodos(): Todo[] | null {
    return this.#todos$.getValue();
  }
}
