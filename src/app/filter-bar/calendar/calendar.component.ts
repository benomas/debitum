import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	public showYearMenu:boolean;
	public showMonthMenu:boolean;
  constructor() {
  	this.showYearMenu=false;
		this.showMonthMenu=false;
  }

  ngOnInit() {
  }

  toogleYearMenu(){
  	this.showYearMenu = !this.showYearMenu;
  	this.showMonthMenu = false;
  }
  
  toogleMonthMenu(){
  	this.showMonthMenu = !this.showMonthMenu;
  	this.showYearMenu = false;
  }
}
