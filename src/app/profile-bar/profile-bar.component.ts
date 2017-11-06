import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss']
})
export class ProfileBarComponent implements OnInit {

	public menuToggler:boolean;
  constructor() { 
  	this.menuToggler=false;
  }

  ngOnInit() {
  }

}
