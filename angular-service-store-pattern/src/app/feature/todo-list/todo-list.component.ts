// Dependencies
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Providers
import { TodoListService, TodoListStoreService } from './services/';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  constructor(
    readonly todoListService: TodoListService,
    readonly todoListStore: TodoListStoreService
  ) {}
}
