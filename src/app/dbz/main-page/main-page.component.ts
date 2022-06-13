import { DbzService } from './../servicios/dbz.service';
import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  personajes:Personaje[]=[

  ]

nuevo: Personaje={
  nombre:'Maeestro Rochi',
  poder:0
}

agregarNuevoPersonaje(argumento:Personaje){

  console.log(argumento);
  this.personajes.push(argumento);
}

constructor(private DbzService: DbzService){}

}
