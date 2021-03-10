import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
            
            <h1>{{titulo}}</h1>
        <!--o escribir cualquier cosa {{1+1}} {{'hola mundo'}}
        temple seria este archivo HTML.
        en el temple ya escrive automantico el this. ejemplo this.numero-->
        <h3> <strong>{{base}}</strong></h3>


        <!--<button (click)="numero = numero + 1;" > +1 </button>-->
        <!--<button (click)="sumar()"> +1 </button>-->
        <!--pudes ponerle de 2 en dos o cual quier numero-->
        <!--<button (click)="acumular(+1)"> +1 </button>-->
        <button (click)="acumular(base)"> + {{base}}</button>

        <span>{{numero}}</span>


        <!--<button (click)="numero = numero - 1"> -1 </button>-->
        <!--<button (click)="restar()"> -1 </button>-->
        <!--<button (click)="acumular(-1)"> -1 </button>-->
        <button (click)="acumular(-base)" > - {{base}} </button>



    `
})

export class ContadorComponent{

  //titulo seria el nombre de la propiedad que iria{{title}} en el archivo html
  titulo = 'acontador App';
  numero :number = 10 ;

  base:number = 5;
  
  //argumento valor
  acumular(valor:number){
    this.numero += valor;
  }

  /*
  otra forma
  sumar(){
    this.numero += 1;
  }
  restar(){
    this.numero -= 1;
  }*/

 

}