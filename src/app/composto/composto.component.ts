import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composto',
  templateUrl: './composto.component.html',
  styleUrls: ['./composto.component.css']
})
export class CompostoComponent implements OnInit {

  valor:number = undefined;
  taxa:number = undefined;
  periodo:number = undefined;
  total:number = 0;
  juros:number = undefined;

  constructor() {
    this.valor = 2000;
    this.taxa = 5;
    this.periodo = 4;
  }

  ngOnInit() {
  }

  jurosTotal() {
    return this.valorTotal() - this.valor;
  }

  valorTotal() {
    return this.valorTotalParcial(this.periodo);
  }

  valorTotalParcial(periodo: number) {
    return this.valor * Math.pow(1 + this.taxa/100, periodo);
  }

  parcelas() {
    let list: number[] = [];
    for (var i = 1; i <= this.periodo; i++) {
      list.push(this.valorTotalParcial(i));
    }
    return list;
  }

}