import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>
                    <h3>La base de la suma es: {{base}}</h3>
                    
                    <button (click)="acumular(+base)" > Sumar {{base}} </button>
                    
                    <span>{{numero}}</span>
                    
                    <button (click)="acumular(-base);"> Restar {{base}} </button>
        ` 
})
export class contadorComponent{
  public titulo:string = 'Acumulador App';
  numero : number = 10;
  base   : number = 5 ;
  acumular ( valor:number ){
    this.numero += valor;
  }

}

