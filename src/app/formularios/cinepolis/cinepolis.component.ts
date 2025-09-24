import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre = '';
  compradores = 0;
  tarjetaCine = 'no';
  boletos = 0;
  totalPagar = 0;
  descuentoAplicado = 0;
  mensajeError = '';

  readonly PRECIO_BOLETO = 12;

  procesarCompra() {
    this.mensajeError = '';
    this.descuentoAplicado = 0;

    // Validar máximo de 7 boletos por persona
    if (this.boletos > this.compradores * 7) {
      this.mensajeError = 'No puedes comprar más de 7 boletos por persona.';
      this.totalPagar = 0;
      return;
    }

    let subtotal = this.boletos * this.PRECIO_BOLETO;

    // Descuento por cantidad de boletos
    if (this.boletos > 5) {
      this.descuentoAplicado = 0.15;
    } else if (this.boletos >= 3) {
      this.descuentoAplicado = 0.10;
    } else {
      this.descuentoAplicado = 0;
    }

    let total = subtotal - subtotal * this.descuentoAplicado;

    // Descuento adicional por Tarjeta Cinépolis
    if (this.tarjetaCine === 'si') {
      total -= total * 0.10;
      this.descuentoAplicado += 0.10;
    }

    this.totalPagar = total;
  }

  salir() {
    this.nombre = '';
    this.compradores = 0;
    this.tarjetaCine = 'no';
    this.boletos = 0;
    this.totalPagar = 0;
    this.descuentoAplicado = 0;
    this.mensajeError = '';
  }
}