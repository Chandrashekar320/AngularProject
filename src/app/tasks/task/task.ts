import { TasksService } from './../tasks.service';
import { Component, Input, inject } from '@angular/core';
import { task } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: task;

  private TasksService = inject(TasksService);


  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
  }
}
