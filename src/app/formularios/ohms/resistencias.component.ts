export class ResistenciasComponent {
  colores: any[] = [
    { nombre: 'Negro', valor: 0, mult: 1, hex: '#000000' },
    { nombre: 'Café', valor: 1, mult: 10, hex: '#6F4E37' },
    { nombre: 'Rojo', valor: 2, mult: 100, hex: '#FF0000' },
    { nombre: 'Naranja', valor: 3, mult: 1000, hex: '#FFA500' },
    { nombre: 'Amarillo', valor: 4, mult: 10000, hex: '#FFFF00' },
    { nombre: 'Verde', valor: 5, mult: 100000, hex: '#008000' },
    { nombre: 'Azul', valor: 6, mult: 1000000, hex: '#0000FF' },
    { nombre: 'Violeta', valor: 7, mult: 10000000, hex: '#8A2BE2' },
    { nombre: 'Gris', valor: 8, mult: 100000000, hex: '#808080' },
    { nombre: 'Blanco', valor: 9, mult: 1000000000, hex: '#FFFFFF' }
  ];

  tolerancias: any[] = [
    { nombre: 'Dorado 5%', valor: 0.05, hex: '#FFD700' },
    { nombre: 'Plata 10%', valor: 0.10, hex: '#C0C0C0' }
  ];

  banda1: any = null;
  banda2: any = null;
  banda3: any = null;
  tolerancia: any = null;

  valorBase: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;

  calcularResistencia(): void {
    if (this.banda1 && this.banda2 && this.banda3 && this.tolerancia) {
      const valor = parseInt(`${this.banda1.valor}${this.banda2.valor}`);
      this.valorBase = valor * this.banda3.mult;

      this.valorMax = this.valorBase + (this.valorBase * this.tolerancia.valor);
      this.valorMin = this.valorBase - (this.valorBase * this.tolerancia.valor);
    }
  }
}
