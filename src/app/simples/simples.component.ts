import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.component.html',
  styleUrls: ['./simples.component.css']
})
export class SimplesComponent implements OnInit {

  valor:number;
  taxa:number;
  periodo:number;
  juros:number = undefined;
  totaljuros:number = undefined;
  valortotal:number = undefined;

  constructor() { 
    this.valor = 2000;
    this.taxa = 5;
    this.periodo = 4;
  }

  ngOnInit() {
  }

  jurosSimples(){
    let list: number[] = [];
    this.totaljuros = this.valor * this.taxa / 100 * this.periodo;
    this.valortotal = this.valor + this.totaljuros
    for(let i = 1; i<=this.periodo; i++){
      this.juros = this.valor * this.taxa/100;
      list.push(this.juros);
    }
    return list;
  }
  
}