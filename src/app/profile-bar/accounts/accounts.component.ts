import { Component, OnInit } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

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

  ngOnInit() {
  }

}
