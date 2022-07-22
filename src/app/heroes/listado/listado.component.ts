import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes:string[]=['Spieder','IronMan','Hulk','Thor'];
  heroeBorrado:string='';
  constructor() { }

  borrarHeroe(){
   this.heroeBorrado= this.heroes.shift() || '';
  }


}
