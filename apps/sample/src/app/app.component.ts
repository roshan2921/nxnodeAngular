import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Todo[]>('http://localhost:3333/api')
      .subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('http://localhost:3333/api', {}).subscribe(() => {
      (data:any) => {
        console.log(data);
      };
      this.fetch();
    });
  }
}
