import { Component, Input, Output, EventEmitter } from '@angular/core';
import { task } from './task.model';
import { Card } from "../../shared/card/card";


@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
