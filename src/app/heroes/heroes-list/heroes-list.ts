import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  heroes:any[]=[
  {
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    descripcion:"Kakaroto",
    race: "Sayajin",
    ki: "60.000.000"
  },

  {
    imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"Vegeta",
    descripcion:"Príncipe de los Saiyans",
    race: "Sayajin",
    ki: "54.000.000"
  },
  {
    imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"Piccolo",
    descripcion:"Cuida morrillos",
    race: "Namekian",
    ki: "2.000.000"
  },
  {
    imagen:"https://dragonball-api.com/characters/bulma.webp",
    nombre:"Bulma",
    descripcion:"Femina",
    race: "Human",
    ki: "0"
  }
]

}
