import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from './app.routing';

import { AccountsComponent } from './profile-bar/accounts/accounts.component';
import { AppComponent } from './app.component';
import { CalendarComponent } from './filter-bar/calendar/calendar.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { LogoComponent } from './profile-bar/logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationsComponent } from './profile-bar/notifications/notifications.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { ResumeComponent } from './dashboard/resume/resume.component';
import { SearchComponent } from './filter-bar/search/search.component';

@NgModule({
  declarations: [
    AccountsComponent,
    AppComponent,
    CalendarComponent,
    ChartComponent,
    DashboardComponent,
    DetailComponent,
    FilterBarComponent,
    LogoComponent,
    MenuComponent,
    NotificationsComponent,
    ProfileBarComponent,
    ResumeComponent,
    SearchComponent
  ],
  imports: [
    Routing
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
