
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  /*nuevo biene de padre*/
  @Input()nuevo:Personaje ={
    nombre:'',
    poder:0
  }
  //Inyectar propiedades de la carpeta de services
  constructor(private dbzService:DbzService){}


  //es lo opuesto a @input emitir una valor de hijo a padre 
  //eventEmitter emite un Personaje
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  

  /*Otra forma
  cambiarNombre(event:any){
    console.log(event.target.value);
  }
  */

  /*aqui estaria la funcion para guardar el $event
  agregar(event:any){
    //para que $event funcione
    event.preventDefault();
    console.log('hey...');
  }*/ 
  /*si es 0 no lo cree 
  trim()quieta los espacios en blanco 
  .length muestra cuantas letras hay
  push guarda lo q hay en el formulario*/ 
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
      //emit() emite un nuevo valor opcional 
      //acepta nuevo por que es de tipo personaje si no no lo aseptaria
      //this.onNuevoPersonaje.emit( this.nuevo );
      this.dbzService.agregarPersonaje(this.nuevo);
      
      this.nuevo = {
        nombre:'',
        poder:0
      }
    
  }


}
