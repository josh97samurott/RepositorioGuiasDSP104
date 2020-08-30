import { Component, OnInit } from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
  tipogasolina;
  costosgasolina:number;
  selected:string;
  total;
  cantidad:number;

  constructor() { }

  ngOnInit(): void {
    this.tipogasolina = ["Regular", "Especial", "Diesel"];
    this.costosgasolina=0;
    this.selected = "Selecciona";
    this.total = 0.05;
    this.cantidad = 0.05;
  }

  costoDeCompra(){
    switch(this.selected){
      case 'Regular':
        this.total = Number(this.cantidad*4.05).toFixed(2);
        this.costosgasolina=4.05;
      break;
      case 'Especial':
        this.total = Number(this.cantidad*4.25).toFixed(2);
        this.costosgasolina=4.25;
      break;
      case 'Diesel':
        this.total = Number(this.cantidad*3.96).toFixed(2);
        this.costosgasolina=3.96;
      break;
    }
  }



}
