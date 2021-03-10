import { Component } from '@angular/core';

//crear un nuevo componente automatico == ng
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[] = 
  ['spiderman','hulk','cap america','thor'];
  
  heroeBorrado:string = '';

  borrarHeroe(){
    //splice es para borra dices el parametro o los elemetos aborrar
    //this.heroes.splice(0,1);
    //borra el primer elemento de una array y lo retorna
    //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
  
  }

 

}
