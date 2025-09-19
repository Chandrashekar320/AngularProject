import { Component, Input, Output, output } from '@angular/core';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  // @Input({required:true}) name:string | undefined ;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angualar',
      summary: 'Complete the Angular course on Udemy',
      dueDate: '2025-12-31'
    },

    {
      id: 't2',
      userId: 'u2',
      title: 'Master C#',
      summary: 'Complete the Dot net course on Udemy',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master SQL',
      summary: 'Complete the SQL course on Udemy',
      dueDate: '2025-12-31'
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master gitBash',
      summary: 'Complete the gitBash course on Udemy',
      dueDate: '2025-12-31'
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }


}
