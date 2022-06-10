import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroesComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroesComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})


export class HeroesModule {

}
