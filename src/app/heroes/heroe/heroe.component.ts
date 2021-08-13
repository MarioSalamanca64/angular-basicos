import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class heroeComponent{
    nombre:string = 'iron man';
    edad:number = 45

    //to UpperCase == capitalizado o negritas con mayusculas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        //crear un temple 
        return `${this.nombre} - ${this.edad}`;
        //es lo mismo return this.nombre + '-' + this.edad.toString()
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(){
        this.edad = 30;
    }

    //bloques azules son propiedades
    //bloques morados que es un metodo o una funcion

}