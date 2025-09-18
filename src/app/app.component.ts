import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baseAngular02';

  duplicarNumero(numero:number){
    return numero *2;
  }

  pelicula={
    titulo: 'Batman',
    anio: new Date(),
    precio: 2500,
    
  }
}
