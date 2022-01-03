// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getData(): { message: string } {
//     return { message: 'Welcome to Node api Trio warriors!' };
//   }
// }



import { Injectable } from '@nestjs/common';
import { Todo } from 'libs/data/src/lib/data.module';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 143' }, { title: 'Todo 2' },{ title: 'Todo 3' },{ title: 'Todo 4' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `Todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}