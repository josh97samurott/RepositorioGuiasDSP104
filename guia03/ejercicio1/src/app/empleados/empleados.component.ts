import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  n: number;
  nombre: string;
  sueldoBase: number;
  isss;
  renta;
  afp;
  sueldoFinal;
  enviar: boolean = false;
  empleado: any;
  registros = [];


  constructor() { }

  ngOnInit(): void {
    this.nombre = '';
    this.sueldoBase = 0;
    this.n = 0;
    this.isss = 0;
    this.renta = 0;
    this.afp = 0;
    this.sueldoFinal = 0;

  }

  calculo() {
    this.enviar = true;
    this.n++;
    this.isss = Number(this.sueldoBase * 0.073).toFixed(2);
    this.renta = Number(this.sueldoBase * 0.11).toFixed(2);
    this.afp = Number(this.sueldoBase * 0.051).toFixed(2);
    this.sueldoFinal = Number(this.sueldoBase - this.isss - this.renta - this.afp).toFixed(2);
    this.empleado = {
      "n":this.n,
      "nombre": this.nombre,
      "sueldoBase": this.sueldoBase,
      "isss": this.isss,
      "renta": this.renta,
      "afp": this.afp,
      "sueldoFinal":this.sueldoFinal
    };
    this.registros.push(this.empleado);
    
  }

}
