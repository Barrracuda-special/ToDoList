import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  @Output() addTask: EventEmitter<any> = new EventEmitter<any>()

  newTask = ''

  addNewTask() {
    if (this.newTask.trim()) {
      let myNewTask = {
        task: this.newTask
      }

      this.addTask.emit(myNewTask)
      this.newTask = ''
    }
  }
}
