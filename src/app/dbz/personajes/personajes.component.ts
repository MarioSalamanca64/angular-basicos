import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  /*componente hijo se conecta con el padre atrabes de el decorador @input()*/
 // @Input() personajeshijo:Personaje[] = [];
 get personajes(){
   return this.DbzService.Personajes;
 }
 constructor(private DbzService:DbzService){
 }

}
