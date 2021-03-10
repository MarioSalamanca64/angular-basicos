import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  //nombre de etiquetas al momento de poner en el html global
  selector: 'app-root',
  //url component.html hace referencia al archivo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']



  //temple literal que mostrara automaticamente sin el archivo HTML
  //template:/*'<span>Fernando</span>'*/
  /*template:/* `
  <h1>Hola de nuevo</h1>
  `*/

})

//app componen es una instacia debes de apuntar con this
//ejemplo en this.numero
export class AppComponent {


}
