import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

//@input es de padre a hijo este array se manda al hijo para mostrarlo
  private _personajespadre:Personaje[]=[
    {
    nombre:'Goku',
    poder:15000
  },
  {
    nombre:'vegeta',
    poder:7500
  },{
    nombre:'truncks',
    poder:4100
  }
];

get Personajes():Personaje[]{
    //se usa la tecnica spreand los tres puntos rompe relacion con js y crea uno nuevo
    return [...this._personajespadre];
}

constructor(){}

agregarPersonaje(dato:Personaje){
        //almacenar
     this._personajespadre.push(dato);
    }

}