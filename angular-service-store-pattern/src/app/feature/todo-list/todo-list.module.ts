// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

// Provides
import { TodoListService } from './services/todo-list.service';
import { TodoListStoreService } from './services/todo-list-store.service';

@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [TodoListService, TodoListStoreService],
  exports: [TodoListComponent],
})
export class TodoListModule {}
