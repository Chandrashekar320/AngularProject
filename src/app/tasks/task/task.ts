import { TasksService } from './../tasks.service';
import { Component, Input, inject } from '@angular/core';
import { task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class Task {
  @Input({ required: true }) task!: task;

  private TasksService = inject(TasksService);


  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
  }
}
