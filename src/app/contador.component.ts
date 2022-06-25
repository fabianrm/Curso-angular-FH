import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: ` 
      <h3>
      La Base es<strong> {{ base }} </strong>
    </h3>

    <button (click)="acumular(base)">+1</button>

    {{ numero }}

    <button (click)="acumular(- base )">-1</button>

  `,
})
export class ContadorComponent {
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
