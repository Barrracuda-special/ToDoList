import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input() newTask: any
  @Output() delTask: EventEmitter<any> = new EventEmitter<any>()

  delTasks() {
    this.delTask.emit()
  }
}
