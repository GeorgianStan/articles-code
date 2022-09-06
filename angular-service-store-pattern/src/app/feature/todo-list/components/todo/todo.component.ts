// Dependencies
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faCircleCheck as uncheckedIcon } from '@fortawesome/free-regular-svg-icons';
import {
  faTrash,
  faCircleCheck as checkedIcon,
} from '@fortawesome/free-solid-svg-icons';

// Services
import { TodoListService } from '../../services';

// Types
export interface Todo {
  id: string;
  label: string;
  state: 'Complete' | 'Pending';
}

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  // public properties
  uncheckedIcon = uncheckedIcon;
  checkedIcon = checkedIcon;
  trashIcon = faTrash;

  @Input() todo!: Todo;

  constructor(readonly todoListService: TodoListService) {}
}
