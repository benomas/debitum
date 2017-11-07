import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss']
})
export class ProfileBarComponent implements OnInit {


	public menuToggler:boolean; 
	public accounts:Account[];
  constructor() {
  	this.menuToggler=false;
		this.accounts = [
			{
				title:"Cuenta Bancaria",
				data:"Equiqueta/HSBC",
				extraData:"Información adicional de Cuenta Bancaria",
				showExtraData:false
			},
			{
				title:"Cuenta Sat",
				data:"RFC - 3456",
				extraData:"Información adicional de Cuenta Sat",
				showExtraData:false
			}
		];
  }

}
