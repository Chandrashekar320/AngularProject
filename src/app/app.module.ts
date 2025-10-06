import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { User } from './user/user';
import { Header } from './header/header';

import { SharedModule } from './shared/card/shared.module';
import { Tasks } from './tasks/tasks';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
// for non standalone components i.e standalone: false. add in declarations
    declarations: [App, Header, User],
    bootstrap: [App],
//i.e for standalone components = true. add in imports:[]
    imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule { }