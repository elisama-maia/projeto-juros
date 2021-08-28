import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composto',
  templateUrl: './composto.component.html',
  styleUrls: ['./composto.component.css']
})
export class CompostoComponent implements OnInit {

  constructor() { }

  valor:number = undefined;
  taxa:number = undefined;
  periodo:number = undefined;
  total:number = 0;
  juros:number = undefined;

  ngOnInit() {
  }

  jurosComposto(){
    let list: number[] = [];
    for(let i = 1; i<=this.periodo; i++){
      this.total = this.valor * (1+ (this.taxa/100)) ** this.periodo;
      this.total -= this.valor;
      list.push(this.total);
    }
    return list;
  }

}