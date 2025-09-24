import { Component } from '@angular/core';

@Component({
  selector: 'app-ohms',
  standalone: false,
  templateUrl: './ohms.component.html',
  styleUrl: './ohms.component.css'
})
export class OhmsComponent {
  color1: string = '0';          
  color2: string = '0';         
  multiplicador: string = '1';  
  tolerancia: string = '0.05';  

  valor: string = '0.00';
  valorMax: string = '0.00';
  valorMin: string = '0.00';

  calcular() {
 
    const c1 = Number(this.color1);
    const c2 = Number(this.color2);
    const mul = Number(this.multiplicador);
    const tol = Number(this.tolerancia);


    const base = (c1 * 10 + c2) * mul;

    this.valor = base.toFixed(2);
    this.valorMax = (base * (1 + tol)).toFixed(2);
    this.valorMin = (base * (1 - tol)).toFixed(2);
  }
}