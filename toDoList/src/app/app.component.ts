import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList'

  allTasks = [
    {task: 'task1'},
    {task: 'task2'}
  ]

  addNewTask(task: any) {
    this.allTasks.unshift(task)
  }

  delete($event: any) {

  }
}
