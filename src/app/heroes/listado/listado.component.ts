import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]=['Spiderma','Hulck','Thor','ironman','Pantera Negra'];
heroesBorrado:string='';
  borrarHeroe(){
    this.heroesBorrado = this.heroes.shift() || ' ';
  }

}
