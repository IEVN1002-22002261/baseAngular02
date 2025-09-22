import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

nombre: string = '';
  compradores: number = 0;
  tarjetaCine: string = 'no';
  boletos: number = 0;
  totalPagar: number = 0;
  mensajeError: string = '';
  descuentoAplicado: number = 0;

  readonly PRECIO_BOLETO = 12;

  procesarCompra() {
    this.mensajeError = '';
    this.descuentoAplicado = 0;


    if (this.boletos > this.compradores * 7) {
      this.mensajeError = 'No puedes comprar más de 7 boletos por persona.';
      this.totalPagar = 0;
      return;
    }

    let subtotal = this.boletos * this.PRECIO_BOLETO;


    if (this.boletos > 5) {
      this.descuentoAplicado = 0.15;
    } else if (this.boletos >= 3 && this.boletos <= 4) {
      this.descuentoAplicado = 0.10;
    }

    let totalConDescuento = subtotal - (subtotal * this.descuentoAplicado);


    if (this.tarjetaCine === 'si') {
      totalConDescuento -= totalConDescuento * 0.10;
      this.descuentoAplicado += 0.10;
    }

    this.totalPagar = totalConDescuento;
  }

  salir() {
    this.nombre = '';
    this.compradores = 0;
    this.tarjetaCine = 'no';
    this.boletos = 0;
    this.totalPagar = 0;
    this.mensajeError = '';
    this.descuentoAplicado = 0;
  }
}
