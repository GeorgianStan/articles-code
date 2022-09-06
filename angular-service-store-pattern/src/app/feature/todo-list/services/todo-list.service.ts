// Dependencies
import { Injectable } from '@angular/core';
import { fetchMockTodos } from 'data/mock.data';

// Mock data
import { Observable } from 'rxjs';

// Types
import { Todo } from '../components/todo/todo.component';
import { TodoListStoreService } from './todo-list-store.service';

@Injectable()
export class TodoListService {
  constructor(private readonly todoListStore: TodoListStoreService) {
    this.fetchTodos().subscribe((todos: Todo[]) => {
      this.todoListStore.setTodos(todos);
    });
  }

  // public methods
  fetchTodos(): Observable<Todo[]> {
    return fetchMockTodos();
  }

  toggleTodoState(todo: Todo): void {
    const todos = this.todoListStore.getTodos() as Todo[];
    const targetTodoIndex = todos?.findIndex(({ id }) => id === todo.id);

    const updatedTodos: Todo[] = [
      ...todos?.slice(0, targetTodoIndex),
      {
        ...todo,
        state: todo.state === 'Pending' ? 'Complete' : 'Pending',
      },
      ...todos?.slice(targetTodoIndex + 1),
    ];

    this.todoListStore.setTodos(updatedTodos);
  }

  removeTodo(todo: Todo): void {
    const todos = this.todoListStore.getTodos() as Todo[];
    const targetTodoIndex = todos?.findIndex(({ id }) => id === todo.id);

    const updatedTodos: Todo[] = [
      ...todos?.slice(0, targetTodoIndex),
      ...todos?.slice(targetTodoIndex + 1),
    ];

    this.todoListStore.setTodos(updatedTodos);
  }
}
