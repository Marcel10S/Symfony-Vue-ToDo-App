import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskComponent } from './task/task.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskBoardComponent,
    TaskComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
