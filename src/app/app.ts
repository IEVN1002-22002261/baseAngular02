import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  tittle = 'baseANgular02';

  duplicarNumero(numero: number): number{
    return numero * 2;
  }

  pelicula ={
    titulo: 'Batman',
    anio: new Date(),
    precio: 2500,
  }

  protected readonly title = signal('baseAngular02');
}
