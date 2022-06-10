import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroesComponent{
  nombre:string='ironman';
  edad:number=45;

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad} `;
  }

  cambiarNombre(){
    this.nombre='spiderman';
  }

  cambiarEdad(){
    this.edad=30;
  }
}
