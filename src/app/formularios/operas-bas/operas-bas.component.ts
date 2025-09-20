import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  res:string="";
  operacion:string="";


  calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch(this.operacion) {
      case "sumar":
        this.res = (n1 + n2).toString();
        break;
      case "restar":
        this.res = (n1 - n2).toString();
        break;
      case "multiplicar":
        this.res = (n1 * n2).toString();
        break;
      case "dividir":
        this.res = n2 !== 0 ? (n1 / n2).toString() : "Error: división por 0";
        break;
      default:
        this.res = "Seleccione una operación";
    }
  }
}