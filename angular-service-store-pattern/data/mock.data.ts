// Dependencies
import { Observable } from 'rxjs';
import { faker } from '@faker-js/faker';

// Types
import { Todo } from 'src/app/feature/todo-list/components/todo/todo.component';

export const createRandomTodo = (todoIndex: number): Todo => ({
  id: faker.datatype.uuid(),
  label: `${todoIndex}. ${faker.lorem.sentence()}`,
  state: faker.datatype.boolean() ? 'Complete' : 'Pending',
});

export const createRandomTodos = (count: number) =>
  new Array(count)
    .fill(undefined)
    .map((_, index) => createRandomTodo(index + 1));

export function fetchMockTodos(): Observable<Todo[]> {
  return new Observable((subscriber) => {
    subscriber.next(createRandomTodos(10));
    subscriber.complete();
  });
}
