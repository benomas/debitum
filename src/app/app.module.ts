import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';

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
import { DiaryComponent } from './dashboard/diary/diary.component';

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
    SearchComponent,
    DiaryComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    NgCircleProgressModule.forRoot({
    }),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }