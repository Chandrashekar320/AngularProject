import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Task } from './tasks/task/task';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Header } from './header/header';
import { NewTask } from './tasks/new-task/new-task';

import { SharedModule } from './shared/card/shared.module';

@NgModule({
// for non standalone components i.e standalone: false. add in declarations
    declarations: [App, Header, User, Tasks, Task , NewTask],
    bootstrap: [App],
//i.e for standalone components = true. add in imports:[]
    imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule { }