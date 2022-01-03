import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@todo/data';

@Component({
  selector: 'todo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
