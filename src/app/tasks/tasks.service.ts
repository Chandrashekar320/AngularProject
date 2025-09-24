import { NewTaskData } from './task/task.model';
import { NewTask } from './new-task/new-task';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
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

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}