import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
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

    const maxBoletos = this.compradores * 7;
    if (this.boletos > maxBoletos) {
      this.mensajeError = `No puedes comprar más de 7 boletos por persona. Máximo permitido: ${maxBoletos}`;
      this.totalPagar = 0;
      return;
    }

    let subtotal = this.boletos * this.PRECIO_BOLETO;
    let descuentoBase = 0;

    if (this.boletos > 5) {
      descuentoBase = 0.15; 
    } else if (this.boletos >= 3 && this.boletos <= 5) {
      descuentoBase = 0.10; 
    } else {
      descuentoBase = 0; 
    }

    let total = subtotal - (subtotal * descuentoBase);

    let descuentoTarjeta = 0;
    if (this.tarjetaCine === 'si') {
      descuentoTarjeta = total * 0.10;
      total = total - descuentoTarjeta;
    }

    this.descuentoAplicado = descuentoBase + (this.tarjetaCine === 'si' ? 0.10 : 0);

    this.totalPagar = parseFloat(total.toFixed(2));
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
