import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResumeComponent } from './resume/resume.component';
import { ChartComponent } from './chart/chart.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileBarComponent,
    FilterBarComponent,
    MenuComponent,
    CalendarComponent,
    ResumeComponent,
    ChartComponent,
    DetailComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
   	Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
