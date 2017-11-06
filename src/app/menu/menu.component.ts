import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	public navItems:any;
	public overItem:string;
	public activeItem:string;

  constructor() { 
  	this.navItems=[
  		"Dashboard",
  		"Facturación",
  		"Conciliaciones",
  		"Clientes",
  		"Reportes",
  		"Declaraciones",
  	];
  }

  ngOnInit() {
  }

  addClass(comparator){
  	if(comparator === this.overItem)
  		return "active-item";
  	return "";
  }

  removeClass(){
  }

  setActiveItem(currentItem){
  		this.overItem = currentItem;
  }
}
