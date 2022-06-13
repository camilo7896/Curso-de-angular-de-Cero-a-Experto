import { Personaje } from './../../interfaces/dbz.interfaces';
import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


 @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  }

  @Output() onNuevoPresonaje: EventEmitter<Personaje> = new EventEmitter();
  @Output() numeroExpuesto: EventEmitter<number>= new EventEmitter();
   agregar(){
     if(this.nuevo.nombre.trim().length===0){return;};
  console.log(this.nuevo);

  this.onNuevoPresonaje.emit(this.nuevo);
  this.nuevo={
          nombre:'',
          poder:0
        }
   }
}
