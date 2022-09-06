// Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { TodoListModule } from './feature/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
