import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent{
  //1personajespadre:Personaje[] = [];
 nuevo:Personaje = {
   nombre:'maestro roshi',
   poder: 1000
 } 

constructor(){

}

 /*2get personajespadre():Personaje[]{
    return this.dbzService.personajespadre;
 }*/


 //probiene del hijo 
 /*2agregarNuevoPersonaje(argumento:Personaje){
   //de puracion de la palicacion
   //debugger; == hace que se pare la ejeccion en cromer
   //f5 chrome (preview)
   this.personajespadre.push(argumento);
 }*/

 /*12constructor(private dbzService:DbzService){
   //1this.personajespadre = this.dbzService.personajespadre;
 }*/
 
}
