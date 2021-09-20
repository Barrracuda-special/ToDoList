import { Component } from '@angular/core';

export interface Task {
  task: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList'

  allTasks: Task[] = [
    {task: 'Here will be all tasks', id: 1},
    {task: 'Here will be all tasks2', id: 2},
  ]

  addNewTask(task: any) {
    this.allTasks.unshift(task)
  }

  delete($event: any) {
  this.allTasks.shift()
  }
}
