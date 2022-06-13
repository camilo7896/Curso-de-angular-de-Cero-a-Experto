import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  @Input() personajes:Personaje[]=[];
}
