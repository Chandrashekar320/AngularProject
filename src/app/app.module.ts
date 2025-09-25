import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@NgModule({
    declarations: [App],// for non standalone components i.e standalone: false
    bootstrap: [App],
imports: [BrowserModule, Header, User, Tasks],//i.e for standalone components = true
})
export class AppModule { }