import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.component.html',
  styleUrls: ['./simples.component.css']
})
export class SimplesComponent implements OnInit {

  constructor() { }

  valor:number = undefined;
  taxa:number = undefined;
  periodo:number = undefined;
  juros:number = undefined;
  total:number = 0;

  ngOnInit() {
  }

  jurosSimples(){
    let list: number[] = [];
    for(let i = 1; i<=this.periodo; i++){
      this.juros = this.valor * this.taxa/100;
      list.push(this.juros);
    }
    return list;
  }

  jurosSimplesT() {
    this.total = this.valor * this.taxa / 100 * this.periodo;
    return this.total;
  }
  
}